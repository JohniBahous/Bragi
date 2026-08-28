import { PrismaClient } from '@prisma/client';
import data from "../seed-data/artistSongData.json" with { type: 'json' }

const prisma = new PrismaClient();


async function main() {
  await prisma.$executeRaw `TRUNCATE TABLE song RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw `TRUNCATE TABLE artist RESTART IDENTITY CASCADE`;

  for (const artist of data) {
    await prisma.artist.create({
      data: {
        ...artist,
        song: {
          create: artist.song
        }
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
  
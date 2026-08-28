import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt"
import data from "../seed-data/adminData.json" with { type: 'json' }

const prisma = new PrismaClient();

async function main() {

  await prisma.$executeRaw `TRUNCATE TABLE admin RESTART IDENTITY CASCADE`;

  for (const admin of data) {

    const plainPassword = process.env[admin.envPassword];

    if (!plainPassword) {
      throw new Error(`Missing env variable: ${admin.envPassword}`);
    }

    const hashedPassword = await bcrypt.hash(plainPassword, 12)

    await prisma.admin.create({
      data: {
        name: admin.name,
        hashedPassword,
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
  
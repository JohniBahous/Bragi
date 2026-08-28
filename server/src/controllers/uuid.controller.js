import { prisma } from "../services/prismaClient.js"

export async function getUuids(req, res) {
    try {
        const artists = await prisma.artist.findMany({
      select: {
        uuid: true, 
        song: {
          select: {
            uuid: true, 
          },
        },
      },
    });

    res.json(artists);
      } catch (err) {
    next(err);
  }
}
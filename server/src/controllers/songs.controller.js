import { prisma } from "../services/prismaClient.js"
import { getFileUrlFromS3 } from "../services/awsS3connect.js";

export async function getAllSongs(req, res) {
      const songs = await prisma.song.findMany({
        where:{
          isActive: true,
          isArchived: false 
        }
    }
  );
  res.json(songs);
}

export async function getSongById(req, res) {
    const {uuid} = req.params;  
    const song = await prisma.song.findUnique({
        where: { 
          uuid: uuid,
          isActive: true,
          isArchived: false 
        }
    }
  );
  res.json(song);
}

export async function getAudioURLById(req, res) {
      const {type, uuid} = req.params;  
      const song = await prisma.song.findUnique({
            where: { 
              uuid: uuid,
              isActive: true,
              isArchived: false 
            }
        }
      );
      const signedUrl = await getFileUrlFromS3(song.s3Key, type, 600)
      res.json({url:signedUrl});
}

export async function incrementPlays(req, res) {
    const  {uuid, type} = req.params;  
    const song = await prisma.song.update({
        where: { 
          uuid: uuid,
          isActive: true,
          isArchived: false 
        },
        data: {
            ...(type == 'full' ? 
                {songPlays: { increment: 1 }} :  
                {snippetPlays: { increment: 1 }}), 
        }
    }
  );
    res.json(song)
}

export async function updateSongData(req, res) {
      const {uuid} = req.params;
  const updatedSong = await prisma.song.update({
        where: { 
          uuid: uuid,
          isActive: true,
          isArchived: false 
        },
    data: req.body
  }
)
  res.json(updatedSong)
}
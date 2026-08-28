import { prisma } from "../services/prismaClient.js"
import { getFileUrlFromS3, moveObject } from "../services/awsS3connect.js";


export async function getAllArtists(req, res) {
    const artists = await prisma.artist.findMany(
    {
      where: { 
        isActive: true,
        isArchived: false
      }
    }
  );
  res.json(artists);
}

export async function getArtistById(req, res) {
    const {uuid} = req.params;  
    const artist = await prisma.artist.findFirst({
        where: { 
          uuid: uuid,
          isActive: true,
          isArchived: false
        }
    }
  );
  res.json(artist);
}

export async function getPortraitURLById(req, res) {
    const {type, uuid} = req.params;  
    const artist = await prisma.artist.findUnique({
        where: { 
            uuid: uuid,
            isActive: true,
            isArchived: false 
            }
        }
      );
      const signedUrl = await getFileUrlFromS3(artist.s3Key, type, 600)
      res.json({url:signedUrl});
}

export async function getSongByArtistId(req, res) {
    const {uuid} = req.params;  
    const song = await prisma.song.findFirst({
        where:{
          artistUuid: uuid,
          isActive: true,
          isArchived: false 
        }
    }
  );
  res.json(song);
}

export async function updateArtistData(req, res) {
    const {uuid} = req.params;
    const updatedArtist = await prisma.artist.update({
        where: { 
          uuid: uuid,
          isActive: true,
          isArchived: false 
        },
    data: req.body
  }
)
  res.json(updatedArtist)
}

export async function replaceArtistAndSong(req, res) {
    const {uuid} = req.params;
      const {newData} = req.body;
    
      const artist = await prisma.artist.findUnique({
        where: { uuid },
      });
    
      const song = await prisma.song.findUnique({ 
        where: { artistUuid: uuid } 
      });
      
      await prisma.artist.update({
        where: { uuid: uuid },
        data: { isArchived: true, isActive: false }
      })
    
      await prisma.song.update({
        where: { artistUuid: uuid },
        data: { isArchived: true, isActive: false }
      })
    
      await moveObject("full",newData.filesData.full, song.s3Key)
      await moveObject("snippet",newData.filesData.snippet, song.s3Key)
      await moveObject("portrait",newData.filesData.portrait, artist.s3Key)
    
      const replacedSong = await prisma.song.create ({
        data: { ...newData.songData }
      })
    
       const replacedArtist = await prisma.artist.create ({
        data: { ...newData.artistData }
      })
    
      return res.json({replacedArtist, replacedSong})
}
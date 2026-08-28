import express from 'express'
import { getAllArtists, getArtistById, getPortraitURLById, getSongByArtistId, updateArtistData, replaceArtistAndSong } from "../controllers/artists.controller.js"
import { requireAdmin } from "../middleware/requireAdmin.js";


const router = express.Router();

router.get('/', getAllArtists);
router.get('/:uuid', getArtistById);
router.get('/:type/:uuid', getPortraitURLById);
router.get('/:uuid/song', getSongByArtistId);
router.put('/:uuid/update', requireAdmin, updateArtistData);
router.put('/:uuid/replace', requireAdmin, replaceArtistAndSong);


export default router;
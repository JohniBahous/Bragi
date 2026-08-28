import express from 'express'
import { getAllSongs, getSongById, getAudioURLById, incrementPlays, updateSongData } from "../controllers/songs.controller.js"
import { requireAdmin } from '../middleware/requireAdmin.js';


const router = express.Router();

router.get('/', getAllSongs);
router.get('/:uuid', getSongById);
router.get('/:type/:uuid', getAudioURLById);
router.put('/:uuid/:type/plays', incrementPlays);
router.put('/:uuid/update', requireAdmin, updateSongData);

export default router;
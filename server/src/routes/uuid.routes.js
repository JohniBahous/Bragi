import express from 'express'
import { getUuids } from "../controllers/uuid.controller.js"

const router = express.Router();

router.get('/', getUuids);


export default router;
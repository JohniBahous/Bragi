import express from 'express'
import { getPresignedUrl } from "../controllers/upload.controller.js"
import { requireAdmin } from "../middleware/requireAdmin.js";
import { presignLimiter } from '../middleware/rateLimiters.js';

const router = express.Router();

router.get('/presigned', presignLimiter, requireAdmin, getPresignedUrl);


export default router;
import express from 'express'
import { getAllAdmins, getAdminById, adminLogin, adminLogout, adminAudit } from "../controllers/admin.controller.js"
import { loginLimiter } from '../middleware/rateLimiters.js';

const router = express.Router();

router.get('/all', getAllAdmins);
router.get('/:uuid', getAdminById);
router.post('/:uuid/login', loginLimiter, adminLogin);
router.post('/logout', adminLogout);
router.post('/audit', adminAudit);


export default router;
import express from 'express';
import { generateShortUrl } from '../controllers/urlController.js';
const router = express.Router();


router.post('/', generateShortUrl)

export default router; 


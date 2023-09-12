import { Router } from 'express';
// import generateUrlController from '../controllers/urlController.js';
import { generateShortUrl } from '../controllers/urlController';
const router = Router();


router.post('/', generateShortUrl)

export default router; 


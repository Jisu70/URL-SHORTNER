import { Router } from 'express';
import generateUrlController from '../controllers/urlController';
const router = Router();


router.post('/',generateUrlController.generateShortUrl)

export default router; 


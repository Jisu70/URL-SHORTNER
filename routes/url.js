import express from "express";
import { generateShortUrl, getUrl } from "../controllers/urlController.js";
const router = express.Router();

router.post("/", generateShortUrl);
router.get("/:urlId", getUrl);

export default router;

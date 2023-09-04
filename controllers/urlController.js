import { nanoid } from 'nanoid';
import Url from '../models/Url.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../config/.env'});
const { validateUrl } = require('../utils/isValid')
// Short URL Generator
const generateShortUrl = async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;
    const urlId = nanoid();
    if (validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({
                ValidUrl
            });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${base}/${urlId}`;
                url = new Url({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date(),
                });
                await url.save();
                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
};
module.exports = generateShortUrl;
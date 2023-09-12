import { nanoid } from 'nanoid';
import Url, { findOne } from '../models/Url.js';
import { validateUrl } from '../utils/isValid';

// Short URL Generator
const generateShortUrl = async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;
    const urlId = nanoid();
    if (validateUrl(origUrl)) {
        try {
            let url = await findOne({ origUrl });
            if (url) {
                res.json({ URL: url.origUrl });
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
            console.error(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
};

export default generateShortUrl;

const { nanoid } = require('nanoid');
const Url =  require('../models/Url.js');
const { validateUrl } = require('../utils/isValid')
// Short URL Generator
const generateShortUrl = async (req, res) => {
    const { origUrl } = req.body;
    const base = process.env.BASE;
    const urlId = nanoid();
    if (validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json({ URL : url});
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
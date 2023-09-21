import { nanoid } from "nanoid";
import Url from "../models/Url.js";

// Short URL Generator
const generateShortUrl = async (req, res) => {
  const { origUrl } = req.body;
  const base = process.env.BASE;
  const urlId = nanoid();
  if (origUrl) {
    try {
      let url = await Url.findOne({ origUrl });
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
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
};

// Redirect to the original url
const getUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
};

export { generateShortUrl, getUrl };

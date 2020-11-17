const routes = require('express').Router();

const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.post("/images", multer(multerConfig).single('file'), async(req, res) => {

  const { originalname: name, size, key, location: url = '' } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url
  });

  console.log(post);
  return res.json(post);
});

module.exports = routes;
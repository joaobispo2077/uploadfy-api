const routes = require('express').Router();

const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');


routes.get('/images', async(req, res, next) => {
  const posts = await Post.find();

  return res.status(200).json(posts);
});

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

routes.delete('/images/:id', async(req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  await post.remove();

  return res.status(200).json({ messsage: 'deleted with success' });
})

module.exports = routes;
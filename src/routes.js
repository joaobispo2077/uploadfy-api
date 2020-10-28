const routes = require('express').Router();

const multer = require('multer');
const multerConfig = require('./config/multer');

routes.post("/", multer(multerConfig).single('image'), (req, res) => {

    console.log(req.file);
    return res.json({ hello: "hi uploadfy" });
});

module.exports = routes;
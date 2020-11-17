const router = require('express').Router();

const User = require('../controllers/Users');
const upload = require('../config/upload');

router.get('/', User.listAll);
router.post('/', upload.single('file'), User.create);

module.exports = router;
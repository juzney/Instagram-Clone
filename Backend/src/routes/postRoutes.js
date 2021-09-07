const express = require('express');
const router = express.Router();
const controllerPost = require('../controllers/controllerPost');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const controllerLike = require('../controllers/controllerLike');

const uploads = multer(uploadConfig);


router.post('/posts', uploads.single('image'), controllerPost.Store);
router.get('/posts', controllerPost.Index);
router.post('/posts/:id/like', controllerLike.Store);


module.exports = router;
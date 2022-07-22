const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.post('/test', (req, res) => {
    Post.create(req.body)
    res.redirect('/');
})
module.exports = router;
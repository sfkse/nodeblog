const express = require('express');
const router = express.Router();
const path = require('path');
const Post = require('../models/Post')

router.get('/new', (req, res) => {
    if (req.session.userId) {
       return res.render('site2/addpost');
    }

    res.redirect('/users/login');
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id).then(post => {
        res.render('site2/post', {post: post.toJSON()});
    })
})

router.post('/test', (req, res) => {
    let post_image = req.files.post_image;

    post_image.mv(path.resolve(__dirname, '../public/img/postimages',post_image.name))
    Post.create({
        ...req.body,
        post_image: `img/postimages/${post_image.name}`
    });
    console.log(req.files.post_image)
    res.redirect('/');
})
module.exports = router;
const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.render('site2/index');
})

router.get('/about', (req, res) => {
    res.render('site2/about');
})

router.get('/blog', (req, res) => {
    Post.find({}).sort({$natural: -1}).then(posts => {
        console.log(posts);
        res.render('site2/blog', {posts: posts.map(post => post.toJSON())});
    })
})

router.get('/contact', (req, res) => {
    res.render('site2/contact');
})

module.exports = router;
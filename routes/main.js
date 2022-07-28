const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const Category = require('../models/Category');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.render('site2/index');
})

router.get('/about', (req, res) => {
    res.render('site2/about');
})

router.get('/blog', (req, res) => {
    Post.find({}).populate({path: 'author', model: User}).sort({$natural: -1}).then(posts => {
        
        Category.find({}).then((categories) => {

            res.render('site2/blog', {posts: posts.map(post => post.toJSON()), categories: categories.map(category => category.toJSON())});
        })
    })
})

router.get('/contact', (req, res) => {
    res.render('site2/contact');
})

module.exports = router;
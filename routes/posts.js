const express = require('express');
const router = express.Router();
const path = require('path');
const Post = require('../models/Post');
const Category = require('../models/Category');
const User = require('../models/User');

router.get('/new', (req, res) => {
    if (req.session.userId) {
        Category.find({}).then((categories) => {

           return res.render('site2/addpost', {categories: categories.map(category => category.toJSON())});
        })
    } else {

        res.redirect('/users/login');
    }

})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id).populate({path: 'author', model: User}).then(post => {
        Category.find({}).then((categories) => {

            res.render('site2/post', {post: post.toJSON(), categories: categories.map(category => category.toJSON())});
        })
    })
})

router.post('/test', (req, res) => {
    let post_image = req.files.post_image;

    post_image.mv(path.resolve(__dirname, '../public/img/postimages',post_image.name))
    Post.create({
        ...req.body,
        post_image: `img/postimages/${post_image.name}`,
        author: req.session.userId
    });
    res.redirect('/');
})
module.exports = router;
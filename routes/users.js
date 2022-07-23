const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/register', (req, res) => {
    res.render('site2/register');
})

router.post('/register', (req, res) => {
    User.create(req.body, (error, user) => {
        res.redirect('/')
    })
    res.render('site2/register');
})

router.get('/login', (req, res) => {    
    res.render('site2/login');
})

router.post('/login', (req, res) => {    
    const { email, password } = req.body;
    User.findOne({email}, (error, user) => {
        if (error) {
            console.log(error);
            res.redirect('/')
        }
        if (user) {
            if (user.password === password) {
                // USER SESSION
                req.session.userId = user._id;
                res.redirect('/');
            }else {
                res.redirect('/users/login')
            }
        }else {
            res.redirect('/users/register')
        }
    })
})

router.get('/logout', (req, res) => {    

    req.session.destroy(() => {
        res.redirect('/');
    })
   
})
module.exports = router;
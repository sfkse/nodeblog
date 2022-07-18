const exphbs = require('express-handlebars')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'


app.use(express.static('public'))

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('site2/index');
})

app.get('/about', (req, res) => {
    res.render('site2/about');
})

app.get('/blog', (req, res) => {
    res.render('site2/blog');
})

app.get('/contact', (req, res) => {
    res.render('site2/contact');
})

app.listen(port, hostname, () => {
  console.log(`Server calisiyor, http://${hostname}:${port}/`)
})


// const http = require('http')
// const fs = require('fs')

// const hostname = "127.0.0.1";
// const port = 3000;

// const indexPage = fs.readFileSync('index.html')
// const aboutPage = fs.readFileSync('about.html')
// const contactPage = fs.readFileSync('contact.html')
// const notFound = fs.readFileSync('404.html')
// const server = http.createServer((req, res) => {
// if (req.url === '/') {
//     return res.end(indexPage);
    
// }else if (req.url === '/about') {
//     return res.end(aboutPage)
// }else if (req.url === '/contact') {
//     return res.end(contactPage)
// }else{
//     res.statusCode = 404;
//     res.end(notFound)
// }
// })

// server.listen(port, hostname, () => {
//     console.log(`Server calisiyor, http://${hostname}:${port}/`);
// })
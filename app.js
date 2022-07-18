const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'


app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'site/index.html'))
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
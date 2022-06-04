const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use('/apply', serveStatic(path.join(__dirname, '/dist')))
app.use('/home', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/dashboard', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/records', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/scholars', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/applicant', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/applicant/view/', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/scholars', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/updates', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/updates/create', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/updates/edit/', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/settings', serveStatic(path.join(__dirname, '/dist')))
app.use('/user/settings', serveStatic(path.join(__dirname, '/dist')))
app.use('/user/dashboard', serveStatic(path.join(__dirname, '/dist')))
app.use('/user/updates', serveStatic(path.join(__dirname, '/dist')))
app.use('/user/updates/view/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)


const path = require('path')
const express = require('express')
const mainRouter = express.Router()
mainRouter.get('/', function (req, res) {
  res.send('Fuck the World')
})
mainRouter.get('/', function (req, res) {
  res.send('Hello World. I\'m a Node app.')
})

module.exports = mainRouter

// ExpressJS !
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// Mongodb Setup
const mongoose = require('mongoose')
mongoose.connect('localhost:27017/codewithbeer')

const Todos = require('./models/Todos')

app.get('/todos', async (req, res) => {
  let todos = await Todos.findAll()
  res.json(todos)
})

app.post('/todos/create', (req, res) => {
  let todo = Todos.create(req.body.title)
    .then(data => {
      res.json(data)
    })
  
})

app.get('/todos/:id', async (req, res) => {
  let todo = await Todos.find(req.params.id)
  res.json(todo)
})

app.listen(3000, () => {
  console.log(`Hi Express !`)
})

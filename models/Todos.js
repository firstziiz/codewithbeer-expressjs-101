const mongoose = require('mongoose')

const TodosSchema = mongoose.Schema({
  todo: String,
  checked: Boolean
}, {
  timestamps: true,
  collection: 'todos'
})

const TodosModel = mongoose.model('TodosModel', TodosSchema)

module.exports = {
  create: (todoTitle) => {
    return new Promise((resolve, reject) => {
      TodosModel.create({
        todo: todoTitle,
        checked: false
      }).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  findAll: async () => await TodosModel.find({}),
  findById: (id) => {
    // ID In Mongodb use `_id`
    let todo = TodosModel.find({
      _id: id
    })
    return todo
  } 
} 

// create, find, findOne, update, delete
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5aea6684d647c1bc44c19e58';
let id = '5aeaf8ee5aaeea48a84d4291';
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo by Id', todo);
// }).catch((error) => console.log(error));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found.');
  }
  console.log('User by Id', user);
}).catch((err) => console.log(err));
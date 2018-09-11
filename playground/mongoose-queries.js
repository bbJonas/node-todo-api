const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b97c79c7cdb832828413b2011';
//
// if (!ObjectId.isValid(id)) {
//   console.log('Id is not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   };
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var userId = '5b97ac4c948f530ed83f7350';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('No user with given Id found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

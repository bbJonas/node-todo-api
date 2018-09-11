// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

// deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

// // findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

// deleteMany from Users
// db.collection('Users').deleteMany({name: 'Jonas'}).then((result) => {
//   console.log(result);
// });

// findOneAndDelete from Users
// db.collection('Users').findOneAndDelete({
//   _id: new ObjectId('5b96604b31d42517681bb559')
// }).then((result) => {
//   console.log(result);
// });

  // client.close();
});

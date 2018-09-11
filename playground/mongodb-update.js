// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

db.collection('Users').findOneAndUpdate({
  _id: new ObjectId("5b966002c73a971f309d14b8")
}, {
  $set: {
    name: 'Jonas'
  },
  $inc: {
    age: -1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // client.close();
});

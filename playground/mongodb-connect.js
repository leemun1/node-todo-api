const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'new todo',
    completed: false
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert todo.', error);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'Mike',
  //   age: 25,
  //   location: '3 Blue Spruce Lane'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert new user.', error);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());

  // });

  client.close();
});
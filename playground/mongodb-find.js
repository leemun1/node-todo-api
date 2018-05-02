const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  db.collection('Users').find({name: 'Mike'}).count().then((count) => {
    console.log(`User counts: ${count}`);
  }, (error) => {
    console.log('Unable to fetch users', error);
  });

  client.close();
});
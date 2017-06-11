// create database in mongo
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// create tables on mongo
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/meantodo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("todos", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
}); 
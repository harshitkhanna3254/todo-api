// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');    // This is known as Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
       return console.log("Unable to connect to the Database(MongoDb) Server")

    console.log("Connected to the mongo server at port no: 27017")

    //deleteMany
    // db.collection('Todos').deleteMany({text:"Eat Lunch"}).then((result) => {
    //     console.log(result)
    // })
    //deleteOne

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed : true}).then((result) => {
        console.log(result)
    })

    // db.close();
})


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');    // This is known as Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
       return console.log("Unable to connect to the Database(MongoDb) Server")

    console.log("Connected to the mongo server at port no: 27017")

    // db.collection('Todos').insertOne({
    //     text : "Something to do",
    //     completed : false
    // }, (err,result) => {
    //     if(err)
    //         return console.log("ERROR : ", err)

    //     console.log(JSON.stringify(result.ops,undefined,2))
    // }); 
    // db.collection('Users').insertOne({
    //     name : "Harshit Khanna",
    //     age : 21,
    //     location : "New Delhi"    
    // }, (err,result) => {
    //     if(err)
    //         return console.log("Error is : ", err)
        
    //     // console.log(result.ops)
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    db.close();
})


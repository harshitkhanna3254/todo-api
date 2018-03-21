// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');    // This is known as Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
       return console.log("Unable to connect to the Database(MongoDb) Server")

    console.log("Connected to the mongo server at port no: 27017")

    // db.collection('Todos').find({
    //     _id : new ObjectID('5ab14036ffda3820f42bcec3')
    // }).toArray().then((docs) => {
    //     console.log("Todos : ")
    //     console.log(JSON.stringify(docs,undefined,2));
    // } , (err) => {
    //     if(err)
    //         console.log("Error :",err)
    // })
    db.collection('Users').find({
        name : "Suga"
    }).toArray().then((docs) => {
        console.log("Todos:")
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        if(err)
            console.log("Error occured")
    })

    // db.close();
})


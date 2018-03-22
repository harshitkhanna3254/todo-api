// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');    // This is known as Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err)
       return console.log("Unable to connect to the Database(MongoDb) Server")

    console.log("Connected to the mongo server at port no: 27017")

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5ab14c6b5f1b262c1c18fe84')
    }, {
        $set : {
            name : "Motu Sugu"
        }
    ,       
         $inc : {
            age : 10
        }
    },{
            returnOriginal : false
    }).then((result) => {
        console.log(result)
    })

    // db.close();
})


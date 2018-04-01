var express = require('express')
var bodyParser = require('body-parser')  // takes Json(to Server) and converts into JavaScript  object

var {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/users');

var app = express();    
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    // console.log(req.body)
    var todo = new Todo({
        text : req.body.text
    })

    todo.save().then((docs) => {
        res.send(docs)
    },(err) => {
        res.send("Error is : " , err)
    })
})

app.get('/todos',(req,res) => {
    Todo.find().then( (todos) => {
        res.send({todos})
    }, (err) => {
        res.send(err)
    })
})


app.get('/todos/:id' , (req,res) => {
    var id = req.params.id;

    console.log(req.params.id + "\n \n \n \n \n")

    if(!ObjectId.isValid(id))
        res.send(400,"The id is invalid. Try a different one.");
    
    Todo.findById(id).then((todo) => {
        res.send({todo})
    }).catch((err) => {
        res.send(404,"Some error occured => " + err);
     });
});


app.delete('/todos/:id' , (req,res) => {

    var id = req.params.id;

    if(!ObjectId.isValid(id))
        return res.send("Id is invalid");
    
        Todo.findOneAndRemove({_id : id}).then((todo) => {

            if(!todo)
               return res.send("No todo found with that id. Maybe it was deleted earlier.")
            res.send("***** This todo has been removed *****" + JSON.stringify(todo,undefined,3));
        }).catch((error) => {
            res.send("Some error occured." + error)
        })
})

app.listen(port,()  => {
    console.log(`Connected to the port : ${port}`)
})
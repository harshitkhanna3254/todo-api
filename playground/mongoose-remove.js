// var express = require('express');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/Todo');
var {User} = require('./../server/models/users');


// Todo.remove({}).then((result) => {                              //We do not get the docs back which were removed. just the number howmany were removed.
//     console.log(JSON.stringify(result,undefined,2));
// })

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5abf4ff84402347499d73a1a').then((todo) => {
    console.log( " ***The todo removed is : *** \n " + JSON.stringify(todo,undefined,3))
})
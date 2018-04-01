// var express = require('express');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/Todo');
var {User} = require('./../server/models/users');



var id = '5abd04627a4d0f1649117879'
User.findById({
    _id : id
}).then((user) => {
    console.log(JSON.stringify(user,undefined,2))
}, (err) => {
    console.log("Some error Occured.")
})



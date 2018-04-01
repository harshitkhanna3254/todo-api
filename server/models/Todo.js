var mongoose = require('mongoose')

// connect to mongoDb : cd Program FIles,mongodb,server,3.6,bin ....... mongod.exe --dbpath /Users/"Harshit Khanna"/mongo-data

var Todo = mongoose.model('Todo',{
    text : {
        type: String,
        required : true,
        minlength : 1,
        trim : true
    },
    completed: {
        type: Boolean,
        default : false
    },
    completedAt: {
        type: Number,
        default : null
    }
})

module.exports = {
    Todo : Todo
}
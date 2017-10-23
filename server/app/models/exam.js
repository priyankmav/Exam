//require mongoose to create schema
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

//my schema for exam
var MyExam = new Schema({
    foo: { type: String, required: true },
    boo: { type: String, required: true, unique:true },
    moo: { type: String, required: true },
    dateRegistered: {type: Date, default: Date.now},
    status: { type: Boolean, default: true}
});

//exporting database
module.exports = Mongoose.model('exam2', MyExam);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = mongoose.connection;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

// DATABASE SCHEMA:
// User:
// id - this is id assigned by google id?
// isAdmin: null
// userId - google log in 
// Firstname
// Lastname
// Email
// Password
// New userPost:	
// specialId - this is the same google client id 
// Post: “”, 

// 

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }
  });

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);


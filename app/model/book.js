//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  id: { type: Number, required: true }, 
  titre: { type: String, required: true }, 
  auteur: String,
  nbPages: { type: Number, min: 10, max: 1000, required: true }, 
});


var Book = mongoose.model('Book', BookSchema );

module.exports = Book
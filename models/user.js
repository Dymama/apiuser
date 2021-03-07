const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = Schema({
  name: String,
  email: String,
  password: String
 
});


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model("user", userSchema,'users');

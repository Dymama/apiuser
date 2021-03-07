const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AssignmentsSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
 
});


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model("assignments", AssignmentsSchema,'assignments');

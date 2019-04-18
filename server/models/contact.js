let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first" // collection is like a table (document is like a record)
});

module.exports = mongoose.model('contact', contactSchema);
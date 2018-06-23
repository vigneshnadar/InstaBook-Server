var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name: String,
    description: String,
    imageurl: String
}, {
    collection: 'book'
});
module.exports = bookSchema;
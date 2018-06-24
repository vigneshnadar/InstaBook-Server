var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name: String,
    description: String,
    imageurl: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {
    collection: 'book'
});
module.exports = bookSchema;
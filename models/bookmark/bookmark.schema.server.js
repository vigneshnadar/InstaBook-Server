var mongoose = require('mongoose');

var bookmarkSchema = mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookModel'
    },
    reader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {
    collection: 'bookmark'
})
module.exports = bookmarkSchema;
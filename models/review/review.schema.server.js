var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BookModel'
    },
    reader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    review: String
}, {
    collection: 'review'
})
module.exports = reviewSchema;
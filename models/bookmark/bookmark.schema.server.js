var mongoose = require('mongoose');

var bookmarkSchema = mongoose.Schema({
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SectionModel'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    grade: String
}, {
    collection: 'bookmark'
})
module.exports = bookmarkSchema;
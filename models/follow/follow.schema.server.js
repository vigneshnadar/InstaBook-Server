var mongoose = require('mongoose');

var followSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    followedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {
    collection: 'follow'
})
module.exports = followSchema;
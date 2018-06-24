
var mongoose = require('mongoose');

var followSchema = require('./follow.schema.server');

var followModel = mongoose.model('FollowModel',followSchema);




function followUser(follow) {
    console.log(follow);
    return followModel.create(follow);
}

var api ={
    followUser: followUser
}


module.exports = api;
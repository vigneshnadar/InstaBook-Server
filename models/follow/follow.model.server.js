
var mongoose = require('mongoose');

var followSchema = require('./follow.schema.server');

var followModel = mongoose.model('FollowModel',followSchema);




function followUser(follow) {
    console.log('idhar hai');
    console.log(follow);

    return followModel.create(follow);
}


function findFollowedByReaders(userId) {
    console.log('tesing out the user');
    console.log(userId);
    return followModel.find({ user :userId })
        .populate('followedBy')
        .exec();

}

function findFollowingReaders(userId) {
    console.log('tesing out the user');
    console.log(userId);
    return followModel.find({ followedBy :userId })
        .populate('user')
        .exec();

}

var api ={
    followUser: followUser,
    findFollowingReaders: findFollowingReaders,
    findFollowedByReaders: findFollowedByReaders
}


module.exports = api;


module.exports = function(app){
    app.get('/api/user',findAllUsers)
    app.get('/api/user/:userId',findUserById)
    app.delete('/api/user/:userId/delete',deleteUserById)
    app.post('/api/user/:userId/update',updateUser)
    app.post('/api/user',createUser)
    app.get('/api/profile',profile)
    app.put('/api/profile',updateProfile)
    app.post('/api/logout',logout)
    app.post('/api/login',login)
    app.get('/api/testuser/follow',findFollowingReaders)
    app.get('/api/testuser/followedby',findFollowedByReaders)
    app.post('/api/user/follow/:userId',followUser)



    var userModel = require('../models/user/user.model.server')
    var followModel = require('../models/follow/follow.model.server')


    function findFollowedByReaders(req, res) {
        var user = req.session['currentUser'];
        console.log('abee current user');

        console.log(user._id);

        followModel.findFollowedByReaders(user._id)
            .then(function (fol) {
                res.json(fol);
            })
    }


    function findFollowingReaders(req, res) {
        var user = req.session['currentUser'];
        console.log('abee current user');

        console.log(user._id);

        followModel.findFollowingReaders(user._id)
            .then(function (fol) {
                res.json(fol);
            })
    }

    function logout(req, res) {

        req.session.destroy();
        console.log("logout");
        res.send(200);
    }
    
    
    function login(req, res) {
        var credentials = req.body;
        userModel.findUserByCredentials(credentials)
            .then(function (user) {
                req.session['currentUser']=user;
                var newUser = user;
                console.log('user is');
                console.log(user);

                // res.json(user);
                if(typeof req.session['currentUser'] === 'undefined'){
                    newUser = {
                        username : 'unregistered',
                        password : 'unregistered'
                    }
                }
                res.json(newUser);
            })
    }

    function updateProfile(req, res) {
        var user = req.body;
        var currentUser =   req.session.currentUser;
        var userId = currentUser._id;
        userModel.updateProfile(user,userId)
            .then(function (user) {
                // req.session['currentUser']=user;
                res.json(user);
            })
    }


    function updateUser(req, res) {
        var user = req.body;
        var userId = req.params['userId'];
        userModel.updateProfile(user,userId)
            .then(function (user) {
                // req.session['currentUser']=user;
                res.json(user);
            })
    }
    
    function findUserById(req, res) {
        var id = req.params['userId'];
        userModel.findUserById(id)
            .then(function (user) {
                res.json(user);
            })
    }


    function followUser(req, res) {
        var followedUser = req.params['userId'];
        var followedBy = req.session['currentUser'];

        var follow = {
            user : followedUser,
            followedBy: followedBy._id
        }
        followModel.followUser(follow)
            .then(function (fol) {
                res.json(fol);
            })
    }



    
    function profile(req, res) {
        console.log('profile');
        console.log(req.session['currentUser']);
        if(typeof req.session['currentUser'] === 'undefined'){
            req.session['currentUser'] = {
                username : 'unregistered',
                password : 'unregistered'
            }
        }
        res.send(req.session['currentUser']);
    }
    
    function createUser(req, res) {
        var user = req.body;
        var createdByAdmin = user.createdByAdmin;
        console.log(createdByAdmin);
        console.log(user);

        //res.send(user);

        userModel.createUser(user)
            .then(function (user) {
                if(!createdByAdmin) {
                    console.log('not created by admin');
                    req.session['currentUser']= user;
                }
                console.log("status is"+user);

                res.send(user);
            })
    }

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (users) {
                res.send(users);
            })
    }

    function deleteUserById(req, res) {
        var id = req.params['userId'];
        userModel.deleteUser(id)
            .then(function (user) {
                res.json(user);
            })
    }
}



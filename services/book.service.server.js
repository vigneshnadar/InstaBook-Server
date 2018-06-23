
// 'http://localhost:4000/api/book'



module.exports = function(app){

    app.post('/api/book',createBook)



    var bookModel = require('../models/book/book.model.server')
    var bookmarkModel = require('../models/bookmark/bookmark.model.server')




    function createBook(req, res) {
        var book = req.body;

        //res.send(user);

        bookModel.createBook(book)
            .then(function (book) {
                console.log("section is"+book);
                // req.session['currentUser']= user;
                res.json(book);
            })
    }


}



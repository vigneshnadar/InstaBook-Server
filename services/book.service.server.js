
// 'http://localhost:4000/api/book'



module.exports = function(app){

    app.post('/api/book',createBook)
    app.post('/api/book/:bookId/bookmark',bookmarkUserInBook)
    app.get('/api/reader/book', findBooksForReader)
    app.get('/api/book/author', findBookByAuthor)
    app.get('/api/book/:bookId/review', findReviewsForBook)
    app.post('/api/:bookId/review', addReview)

    // app.post('/api/section/:sectionId/enrollment',enrollStudentInSection)



    var bookModel = require('../models/book/book.model.server')
    var bookmarkModel = require('../models/bookmark/bookmark.model.server')
    var reviewModel = require('../models/review/review.model.server')




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


    function bookmarkUserInBook(req, res) {
        var bookId = req.params['bookId'];
        var currentUser =   req.session.currentUser;
        console.log('currentUser');
        console.log(currentUser);
        var userId = currentUser._id;
        var bookmark = {
            reader : userId,
            book : bookId
        };

        return  bookmarkModel
            .bookmarkUserInBook(bookmark)
            .then(function (bookmark) {
                res.json(bookmark);
            });
    }


    function findBooksForReader(req, res) {
        var currentUser = req.session['currentUser'];
        var readerId = currentUser._id;
        bookmarkModel.findBooksForReader(readerId)
            .then(function (books) {
                console.log('bk');
                console.log(books);
                res.json(books);
            })

    }


    function findBookByAuthor(req, res) {

        var currentUser =   req.session.currentUser;
        console.log('currentUser');
        console.log(currentUser);
        var userId = currentUser._id;


        return  bookModel
            .findBookByAuthor(userId)
            .then(function (books) {
                res.json(books);
            });
    }


    function findReviewsForBook(req, res) {
        var bookId = req.params['bookId'];

        return  reviewModel
            .findReviewsForBook(bookId)
            .then(function (rev) {
                res.json(rev);
            });
    }


    function addReview(req, res) {
        var bookId = req.params['bookId'];
        var currentUser =   req.session.currentUser;
        var r = req.body;
        // console.log('currentUser');
        // console.log(currentUser);
        var userId = currentUser._id;
        var review = {
            reader : userId,
            book : bookId,
            review: r.review
        };

        return  reviewModel
            .addReview(review)
            .then(function (rev) {
                res.json(rev);
            });
    }


}



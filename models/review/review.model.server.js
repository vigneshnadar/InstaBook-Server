var mongoose = require('mongoose');

var reviewSchema = require('./review.schema.server');

var reviewModel = mongoose.model('ReviewModel',reviewSchema);




function addReview(review) {
    console.log(review);
    return reviewModel.create(review);
}

function findReviewsForBook(bookId) {

    return reviewModel
        .find({book: bookId})
        .populate('reader')
        .exec();
}
//
//
//
// function removeEnrollment(enrollment) {
//     console.log(enrollment);
//     return enrollmentModel.remove(enrollment);
// }


// function findSectionsForCourse(courseId) {
//     return sectionModel.find({courseId: courseId});
// }
//
//
var api ={
    addReview: addReview,
    findReviewsForBook: findReviewsForBook
    // enrollStudentInSection: enrollStudentInSection,
    // findSectionsForStudent: findSectionsForStudent,
    // unenrollStudentInSection: unenrollStudentInSection,
    // removeEnrollment: removeEnrollment
}


module.exports = api;
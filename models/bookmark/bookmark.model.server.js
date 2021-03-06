var mongoose = require('mongoose');

var bookmarkSchema = require('./bookmark.schema.server');

var bookmarkModel = mongoose.model('BookmarkModel',bookmarkSchema);




function bookmarkUserInBook(bookmark) {
    console.log('bookmark');
    console.log(bookmark);
    return bookmarkModel.create(bookmark);
}

function findBooksForReader(readerId) {

    return bookmarkModel
        .find({reader: readerId})
        .populate('book')
        .exec();
}
//
//
//
// function removeEnrollment(enrollment) {
//     console.log(enrollment);
//     return enrollmentModel.remove(enrollment);
// }
function removeBookmark(bookmark) {
    return bookmarkModel.remove(bookmark);
}

// function findSectionsForCourse(courseId) {
//     return sectionModel.find({courseId: courseId});
// }
//
//
var api ={
    bookmarkUserInBook: bookmarkUserInBook,
    findBooksForReader: findBooksForReader,
    removeBookmark: removeBookmark
    // enrollStudentInSection: enrollStudentInSection,
    // findSectionsForStudent: findSectionsForStudent,
    // unenrollStudentInSection: unenrollStudentInSection,
    // removeEnrollment: removeEnrollment
}


module.exports = api;
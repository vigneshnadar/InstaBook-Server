var mongoose = require('mongoose');

var bookmarkSchema = require('./bookmark.schema.server');

var bookmarkModel = mongoose.model('BookmarkModel',bookmarkSchema);




function bookmarkUserInBook(bookmark) {
    console.log(bookmark);
    return bookmarkModel.create(bookmark);
}

// function findSectionsForStudent(studentId) {
//     return enrollmentModel
//         .find({student: studentId})
//         .populate('section')
//         .exec();
// }
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
    bookmarkUserInBook: bookmarkUserInBook
    // enrollStudentInSection: enrollStudentInSection,
    // findSectionsForStudent: findSectionsForStudent,
    // unenrollStudentInSection: unenrollStudentInSection,
    // removeEnrollment: removeEnrollment
}


module.exports = api;
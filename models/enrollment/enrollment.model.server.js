var mongoose = require('mongoose');

var enrollmentSchema = require('./enrollment.schema.server');

var enrollmentModel = mongoose.model('EnrollmentModel',enrollmentSchema);

function unenrollStudentInSection(enrollment) {
    console.log(enrollment);
    return enrollmentModel.remove(enrollment);
}


function enrollStudentInSection(enrollment) {
    console.log(enrollment);
    return enrollmentModel.create(enrollment);
}

function findSectionsForStudent(studentId) {
    return enrollmentModel
        .find({student: studentId})
        .populate('section')
        .exec();
}



function removeEnrollment(enrollment) {
    console.log(enrollment);
    return enrollmentModel.remove(enrollment);
}


// function findSectionsForCourse(courseId) {
//     return sectionModel.find({courseId: courseId});
// }
//
//
var api ={
    enrollStudentInSection: enrollStudentInSection,
    findSectionsForStudent: findSectionsForStudent,
    unenrollStudentInSection: unenrollStudentInSection,
    removeEnrollment: removeEnrollment
}


module.exports = api;
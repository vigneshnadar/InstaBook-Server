var mongoose = require('mongoose');

var bookSchema = require('./book.schema.server');

var bookModel = mongoose.model('BookModel',bookSchema);

function createBook(book) {
    console.log(book);
    return bookModel.create(book);
}


function findBookByAuthor(authorId) {
    console.log('find by ids');
    // console.log(userModel.findOne({ _id :userId }));
    return bookModel.find({ author :authorId })
    // return userModel.findById(userId);
}


// function editSection(sectionId,section) {
//     console.log(section);
//     return sectionModel.update({
//         _id : sectionId
//     },{
//         $set: section
//     })
// }
//
// function findSectionById(sectionId) {
//     console.log('find by ids');
//     // console.log(userModel.findOne({ _id :userId }));
//     return sectionModel.findOne({ _id :sectionId })
//     // return userModel.findById(userId);
// }
//
//
// function findSectionsForCourse(courseId) {
//     return sectionModel.find({courseId: courseId});
// }
//
// function decrementSectionSeats(sectionId) {
//     return sectionModel.update({
//         _id : sectionId
//     },{
//         $inc: { seats: -1 }
//     })
//
// }
//
// function incrementSectionSeats(sectionId) {
//     return sectionModel.update({
//         _id : sectionId
//     },{
//         $inc: { seats: +1 }
//     })
//
// }
//
// function removeSection(sectionId) {
//     return sectionModel.remove({
//         _id : sectionId
//     })
//
// }




var api ={
    createBook: createBook,
    findBookByAuthor: findBookByAuthor
    // findSectionsForCourse: findSectionsForCourse,
    // decrementSectionSeats: decrementSectionSeats,
    // incrementSectionSeats: incrementSectionSeats,
    // removeSection: removeSection,
    // editSection: editSection,
    // findSectionById: findSectionById
}


module.exports = api;
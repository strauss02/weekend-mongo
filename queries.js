//get all students
db.students.find({})
//get all students with name set to "Ido"
db.students.find({ name: 'Ido' })
//get all students where courses include "Law"
db.students.find({ courses: 'Law' })

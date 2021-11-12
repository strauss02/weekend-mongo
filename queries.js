//get all students
db.students.find({})
//get all students with name set to "Ido"
db.students.find({ name: 'Ido' })
//get all students where courses include "Law"
db.students.find({ courses: 'Law' })
// get all students where courses include "Java" and gender set to "Female"
db.students.find({
  $and: [{ courses: 'Java' }, { gender: 'Female' }],
})
// get all students where birth > 05/05/1998
db.students.find({ birth: { $gte: new ISODate('1998-05-05T22:00:00.000Z') } })
// get all students where phone starts with 054
db.students.find({ phone: { $regex: /^054/ } })

/* ============== Update Documents ============= */

// add a JavaScript course to the students where name set to "Yahalom"
db.students.updateOne(
  { name: 'Yahalom' },
  {
    $push: { courses: 'Javascript' },
  }
)

// update the birth to 02/12/1998 where name set to "Koren"
db.students.updateOne(
  { name: 'Koren' },
  {
    $set: { birth: new ISODate('1998-12-02T22:00:00.000Z') },
  }
)

/* ============== Text Search ============= */

// find all students that have a name that contains the letter "o"
db.students.find({ name: { $regex: /o/ } })
// find all students that have a surName that contains the letter "h" or "y"
db.students.find({ surName: { $regex: /h?|y?/ } })

/* ============== Delete Documents ============= */

// delete the student where name set to "Ido"

db.students.deleteOne({ name: 'Ido' })

// delete the student where date set to "02/04/1998"

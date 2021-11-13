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
db.students.deleteOne({ birth: new ISODate('1998-04-02T22:00:00.000Z') })

/* ============== Relationships ============= */

db.users.insertOne({
  username: 'GoodGuyGreg',
  first_name: 'Good Guy',
  last_name: 'Greg',
})

db.users.insertOne({
  username: 'ScumbagSteve',
  first_name: 'Scumbag',
  last_name: 'Steve',
})

/* ============== Posts and Comments collections ============= */

db.posts.insert([
  {
    username: 'GoodGuyGreg',
    title: 'Passes out at party',
    body: 'Wakes up early and cleans house',
  },
  {
    username: 'GoodGuyGreg',
    title: 'Steals your identity',
    body: 'Raises your credit score',
  },

  {
    username: 'GoodGuyGreg',
    title: 'Reports a bug in your code',
    body: 'Sends you a Pull Request',
  },

  {
    username: 'ScumbagSteve',
    title: 'Borrows something',
    body: 'Sells it',
  },

  {
    username: 'ScumbagSteve',
    title: 'Borrows everything',
    body: 'The end',
  },

  {
    username: 'ScumbagSteve',
    title: 'Forks your repo on github',
    body: 'Sets to private',
  },
])

db.comments.insert([
  {
    username: 'GoodGuyGreg',
    comment: 'Hope you got a good deal!',
    post: '618e5143ba4dd92cd88603eb',
  },
  {
    username: 'GoodGuyGreg',
    comment: "What's mine is yours!",
    post: '618e5143ba4dd92cd88603ec',
  },
  {
    username: 'GoodGuyGreg',
    comment: "Don't violate the licensing agreement!",
    post: '618e5143ba4dd92cd88603ed',
  },
  {
    username: 'ScumbagSteve',
    comment: "It still isn't clean",
    post: '618e5143ba4dd92cd88603e8',
  },
  {
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause I found a hack',
    post: '618e5143ba4dd92cd88603ea',
  },
])

/* ============== Queries ============= */

// find all users
db.users.find({})

// find all posts
db.posts.find({})

// find all posts that was authored by "GoodGuyGreg"
db.posts.find({ username: 'GoodGuyGreg' })

// find all posts that was authored by "ScumbagSteve"
db.posts.find({ username: 'ScumbagSteve' })

// find all comments
db.comments.find({})

// find all comments that was authored by "GoodGuyGreg"
db.comments.find({ username: 'GoodGuyGreg' })

// find all comments that was authored by "ScumbagSteve"
db.comments.find({ username: 'ScumbagSteve' })

// find all comments belonging to the post "Reports a bug in your code"
db.comments.find({ post: '618e8946f3c439dad857ce8f' })

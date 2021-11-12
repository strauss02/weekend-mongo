/* ======================= */

require('dotenv').config()

/* ======================= */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const { morganBodyLogger } = require('./morgan')
/* ======================= */
const userRouter = require('./routers/user')
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware')
const unknownEndpoint = require('./middlewares/unknownEndpoint')
/* ======================= */

const mongo = process.env.MONGODB_URI

//connecting to database
mongoose
  .connect(mongo)
  .then((result) => {
    console.log('connected to MongoDB')
    db.collection.insert(data)
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

/* ======================= */

app.use(morganBodyLogger)
/* ======================= */

app.get('/', (req, res) => {
  res.send('working')
})
/* ======================= */

app.use('/user', userRouter)

// unknownEndpoint handling middleware
app.use(unknownEndpoint)

// error handling middleware
app.use(errorHandlingMiddleware)

/* =======TEST ZONE======== */

const data = [
  {
    name: 'Ido',
    surName: 'Arbel',
    birth: new Date('01/26/1998'),
    phone: '0526305421',
    gender: 'Male',
    courses: ['Java', 'Math'],
  },
  {
    name: 'Chen',
    surName: 'Halevi',
    birth: new Date('03/11/1997'),
    phone: '0526323421',
    gender: 'Male',
    courses: ['Math', 'Law'],
  },
  {
    name: 'Koren',
    surName: 'Gan-or',
    birth: new Date('01/19/1997'),
    phone: '0526305321',
    gender: 'Male',
    courses: ['JavaScript', 'Finance', 'Law'],
  },
  {
    name: 'Oryan',
    surName: 'Levy',
    birth: new Date('04/02/1998'),
    phone: '0542305321',
    gender: 'Male',
    courses: ['JavaScript', 'Law'],
  },
  {
    name: 'Yahalom',
    surName: 'Cohen',
    birth: new Date('11/03/1993'),
    phone: '0542305392',
    gender: 'Female',
    courses: ['Java', 'Law'],
  },
]

db.collection.insert(data)

/* =======END TEST ZONE======== */

/* ======================= */

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`litsening in port ${port}`)
})

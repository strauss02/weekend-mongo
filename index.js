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

/* =======END TEST ZONE======== */

/* ======================= */

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`litsening in port ${port}`)
})

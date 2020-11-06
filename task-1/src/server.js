const express = require('express')
const userRouter = require('./resources/users/user.router')
const { PORT } = require('./common/config')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.json())

app.use('/users', userRouter)

app.use(function (err, req, res, next) {
  res.status(err.status).send(err)
})

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
)

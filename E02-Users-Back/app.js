const express = require('express')

const usersRouter = require('./users/users.router')

const port = 9020
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

app.use('/', usersRouter)

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})

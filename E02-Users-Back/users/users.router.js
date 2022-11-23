const router = require('express').Router()
const usersServices = require('./users.services')

router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postUser)

router.get('/users/:id', usersServices.getUserById)
router.delete('/users/:id', usersServices.removeUserById)
router.put('/users/:id', usersServices.modifyUserById)

module.exports = router
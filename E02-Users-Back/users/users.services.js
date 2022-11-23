//? En este archivo vamos a utilizar todo lo relacionado al REQ y RES

const usersControllers = require('./users.controllers')
//* usersControllers.findAllUsers()
//* usersControllers.findUserById(id)
//* usersControllers.deleteUserById(id)
//* usersControllers.createUser(obj)
//* usersControllers.updateUserById(id, obj)

const getAllUsers = (req, res) => {
  const data = usersControllers.findAllUsers()
  res.status(200).json(data)
}

const getUserById = (req, res) => {
  const id = req.params.id
  const data = usersControllers.findUserById(id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'Invalid ID' })
  }
}

const removeUserById = (req, res) => {
  const id = req.params.id
  const data = usersControllers.deleteUserById(id)
  if (data) {
    res.status(201).json({ removed_record: data })
  } else {
    res.status(404).json({ message: 'Invalid ID' })
  }
}

const postUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body
  //*  Example:
  //*  {
  //*    id: 1,
  //*    first_name: 'string',
  //*    last_name: 'string',
  //*    email: 'string',
  //*    password: 'string',
  //*    birthday: 'YYYY/MM/DD'
  //*  }
  if (first_name && last_name && email && password) {
    const data = usersControllers.createUser({ first_name, last_name, email, password, birthday })
    res.status(201).json(data)
  } else {
    res.status(400).json({
      message: 'Invalid Data', fields: {
        first_name: 'string',
        last_name: 'string',
        email: 'string',
        password: 'string',
        birthday: 'YYYY/MM/DD'
      }
    })
  }
}

const modifyUserById = (req, res) => {
  const id = req.params.id
  const obj = req.body
  const data = usersControllers.updateUserById(id, obj)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'Invalid ID' })
  }
}


module.exports = {
  getAllUsers,
  getUserById,
  removeUserById,
  postUser,
  modifyUserById
}

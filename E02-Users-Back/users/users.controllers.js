
const usersDB = []
//*  Example:
//*  {
//*    id: 1,
//*    first_name: 'string',
//*    last_name: 'string',
//*    email: 'string',
//*    password: 'string',
//*    birthday: 'YYYY/MM/DD'
//*  }

let id = 1

const findAllUsers = () => {
  //? Bring all users in the data base
  return usersDB
}

const findUserById = (id) => {
  //? Bring one user with a specific id number
  const user = usersDB.find(item => item.id == id)
  return user
}

const deleteUserById = (id) => {
  //? Delete a user with a specific id number
  const userIndex = usersDB.findIndex(item => item.id == id)
  const deletedUser = usersDB[userIndex]
  usersDB.splice(userIndex, 1)
  return deletedUser
}

const createUser = (obj) => {
  //? Create a new user in the database and return it
  const newUser = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday
  }
  usersDB.push(newUser)
  return newUser
}

const updateUserById = (id, obj) => {
  //? Update the record fields of a user with a specific id
  const userIndex = usersDB.findIndex(item => item.id == id)
  usersDB[userIndex].first_name = obj.first_name ? obj.first_name : usersDB[userIndex].first_name,
    usersDB[userIndex].last_name = obj.last_name ? obj.last_name : usersDB[userIndex].last_name,
    usersDB[userIndex].email = obj.email ? obj.email : usersDB[userIndex].email,
    usersDB[userIndex].password = obj.password ? obj.password : usersDB[userIndex].password,
    usersDB[userIndex].birthday = obj.birthday ? obj.birthday : usersDB[userIndex].birthday
  return usersDB[userIndex]
}


module.exports = {
  findAllUsers,
  findUserById,
  deleteUserById,
  createUser,
  updateUserById
}


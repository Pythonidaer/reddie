import bcrypt from 'bcryptjs'

// An array of user objects representing sample user data
const users = [
  {
    username: 'Jonathan Hammond',
    email: 'codefolio.work@gmail.com',
    password: bcrypt.hashSync('Nana.2013', 10),
    isAdmin: true,
  },
  {
    username: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    username: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
/*
The password property is hashed using bcryptjs.hashSync() to securely store the passwords. The second argument 10 represents the salt rounds used for hashing.
*/

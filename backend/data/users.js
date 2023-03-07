import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Jonathan Hammond',
    email: 'codefolio.work@gmail.com',
    password: bcrypt.hashSync('Nana.2013', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

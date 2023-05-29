import mongoose from 'mongoose'

// Define the user schema
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a username'], // Username field is required
    },
    email: {
      type: String,
      required: [true, 'Please add an email'], // Email field is required
      unique: true, // Email field must be unique
    },
    password: {
      type: String,
      required: [true, 'Please add a password'], // Password field is required
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // isAdmin field defaults to false
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields with timestamps
  }
)

// Create the User model using the user schema
const User = mongoose.model('User', userSchema)

// Export the User model
export default User
/*
In this code, a Mongoose schema is defined for the User model. The schema defines the structure and validation rules for user documents in the MongoDB collection. Each field in the schema has a specified type and can have additional properties like required, unique, and default.

The User model is created using the schema, which allows you to interact with the users collection in MongoDB. The model is exported to be used in other files.

The schema includes a timestamps option set to true, which adds createdAt and updatedAt fields to the documents. These fields automatically record the creation and modification timestamps for each user document.
*/

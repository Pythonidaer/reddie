# Reddie App

The Reddie App is an interactive web application that allows users to fetch and view posts from various subreddits based on their input. With a user-friendly interface, users can browse through comment threads and engage in discussions. Additionally, the app provides a convenient feature for users to save comments they find interesting, allowing them to revisit and view them later at their convenience.

## Technologies Used

The following technologies have been utilized in this project:

- Heroku: Deployment platform for hosting the application.
- CSS: Styling language used to enhance the user interface.
- JavaScript (ESM): Programming language for both the client-side and server-side development.
- React: JavaScript library for building user interfaces.
- React-Bootstrap: UI framework for responsive and mobile-friendly web development.
- JSX: Syntax extension for JavaScript used with React for defining the user interface.
- Node.js: JavaScript runtime environment for executing server-side code.
- Express: Web application framework for Node.js, used for building server-side applications.
- MongoDB: NoSQL database used for storing and managing application data.
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
- ReduxJS: State management library for JavaScript applications.
- JWT: JSON Web Tokens used for secure authentication and authorization.
- bcrypt: Password hashing function used for secure password storage.
- Toastify: Library for displaying toast notifications in the application.
- Git: Version control system used for tracking changes in the codebase.
- GitHub: Web-based hosting service for Git repositories.
- Axios: Promise-based HTTP client for making API requests.
- Cypress: JavaScript end-to-end testing framework.

## Prerequisites

Before running the application, ensure you have the following software installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/en/download/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository from GitHub:
   git clone git@github.com:Pythonidaer/reddie.git

2. Navigate to the project directory:
   cd your-repo

3. Install the dependencies (root and frontend folders both have package.json files):
   npm install

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:
   NODE_ENV = your-node-env
   PORT = 5000
   MONGO_URI = your-mongodb-uri
   JWT_SECRET = your-jwt-secret

Replace `your-mongodb-uri` with the connection string for your MongoDB database and `your-jwt-secret` with a secret key for JSON Web Token signing.

## Usage

To start the application, run the following command:
npm run dev

The application will be accessible at `http://localhost:5000`.

## Testing

To run the tests, execute the following command:
npx cypress open

This will run the Cypress end-to-end tests and display the test results.

## Deployment

The application can be deployed to Heroku or any other hosting platform that supports Node.js applications. Make sure to configure the environment variables on the hosting platform as specified in the Configuration section.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request explaining your changes.

# Please note that at this time, it may benefit you more to simply branch off and expand on your own Reddie App. A.M.A.

## Acknowledgements

- [MERN Stack](https://www.mongodb.com/mern-stack)
- [React Documentation](https://reactjs.org/docs)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Redux Documentation](https://redux.js.org/)
- [Cypress Documentation](https://docs.cypress.io/)
- [OpenAI](https://chat.openai.com/)

## Contact

For any questions or inquiries, please contact [codefolio.work@gmail.com](codefolio.work@gmail.com).

---

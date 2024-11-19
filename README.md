# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






src/
├── components/         # Contains reusable React components
│   ├── UserList.jsx    # Component for displaying the list of users
│   ├── UserForm.jsx    # Component for adding and editing user details
│   └── ErrorBoundary.jsx # Error boundary for handling unexpected errors
├── context/            # Context API for managing global state
│   └── UserContext.jsx # Provides state and functions for user management
├── services/           # Contains API service functions
│   └── api.js          # Functions for interacting with the JSONPlaceholder API
├── App.js              # Main application entry point
└── index.js            # Application bootstrap and rendering


# Components
1. UserList
Displays the list of users.
Includes "Edit" and "Delete" buttons for each user.
Interacts with the UserContext to fetch and update the list.

2. UserForm
A form component for adding or editing users.
Handles both creation (POST) and updates (PUT) of users.
Accepts a user object as a prop for pre-filling fields during editing.

3. ErrorBoundary
Wraps around components to catch JavaScript errors.
Displays a fallback UI if an error occurs.


### Key Features
View Users: Fetch and display a list of users from the API.
Add User: Add a new user using a simple form.
Edit User: Edit details of an existing user.
Delete User: Remove a user from the list.
Error Handling: Friendly messages for failed API calls or unexpected errors.


# Challenges Faced

State Management:
Deciding between useState and useContext() for managing global and component-level state.
Solution: Used UserContext to share data and methods across components.

API Limitations:
JSONPlaceholder is a fake API; changes (e.g., adding or deleting users) are not persistent.
Solution: Updated the state locally to simulate real-time updates.

Form Handling:
Handling form submissions for both "add" and "edit" actions in a single component.
Solution: Used conditional logic based on the presence of a user.id.

Error Management:
Ensuring clear error messages for failed API requests.
Solution: Integrated try-catch blocks and an error state for user feedback.

# Potential Improvements

Backend API:
Replace JSONPlaceholder with a custom backend for real data persistence.

UI Enhancements:
Improve styling using libraries like Material-UI or Tailwind CSS.
Add modals for forms instead of inline forms.

# Advanced Features:
Pagination or infinite scrolling for large user datasets.
Add search and filter functionality.
Implement user authentication for secure access.



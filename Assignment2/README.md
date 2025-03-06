# User Management System

A simple Node.js and Express-based User Management System that allows users to create, validate, and display user lists using JSON as storage.

## Features
- Add new users with form validation.
- Validate user inputs (only letters allowed for names).
- Store user data in a JSON file.
- Prevent duplicate user entries.
- Display a list of registered users.

## Prerequisites
The following must be installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setup

npm install

node server.js

npm install -g nodemon

nodemon server.js

http://localhost:3000


##Project Structure

/user-management-system
│── /controllers       # Handles user actions
│── /middleware        # Middleware for request validation
│── /routes            # Defines user-related routes
│── /data              # Contains users.json file (user data storage)
│── public/styles.css  # Styles for the UI
│── server.js          # Main entry point for the app
│── package.json       # Project dependencies & scripts
│── README.md          # Documentation (this file)


##Usage Instructions

1. Add a New User
Visit: http://localhost:3000/create
Enter first and last name (only alphabets allowed).
Click Submit to add the user.

2. View All Users
Visit: http://localhost:3000/users
Displays a list of all registered users.

3. Input Validation
Names must contain only alphabets (A-Z, a-z).
Duplicate names are not allowed.
Invalid inputs will show an error message.
# MERN CRUD Application

A full stack CRUD application built with the MERN stack. Users can create, view, update, and delete records through a responsive React interface with a Node.js and Express backend connected to MongoDB Atlas.

## Live Demo

Frontend:
https://to-do-crud-operations.vercel.app/

Backend API:
https://to-do-mern-stack-c7mi.onrender.com/

## Features

• Create new users

• View all users

• Update existing users

• Delete users

• RESTful API

• MongoDB Atlas database

• Responsive user interface

## Tech Stack

Frontend

• React.js

• React Router DOM

• Axios

• Tailwind CSS

Backend

• Node.js

• Express.js

• MongoDB

• Mongoose

Deployment

• Vercel

• Render

• MongoDB Atlas

## Project Structure

```
to_do_mern_stack/
│
├── server/
│   ├── controller/
│   ├── models/
│   ├── router/
│   ├── connection/
│   ├── .env
│   ├── index.js
│   └── package.json
│
└── toDoCRUD_Operations/
    ├── src/
    ├── public/
    ├── package.json
    └── vite.config.js
```

## API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /getuser    | Get all users     |
| POST   | /createUser | Create a new user |
| GET    | /update/:id | Get a single user |
| PUT    | /update/:id | Update a user     |
| DELETE | /delete/:id | Delete a user     |

## Installation

### Clone the repository

```bash
git clone https://github.com/abdullahkhalil00/to_do_mern_stack.git
```

### Install backend dependencies

```bash
cd server
npm install
```

### Install frontend dependencies

```bash
cd ../toDoCRUD_Operations
npm install
```

### Backend environment variables

Create a `.env` file inside the `server` folder.

```
MONGODB_URI=your_mongodb_connection_string
PORT=8003
```

### Start backend

```bash
cd server
npm start
```

### Start frontend

```bash
cd toDoCRUD_Operations
npm run dev
```

## Screenshots

You can add screenshots of:

• Home Page

• Create User

• Update User

• Mobile View

## Author

Abdullah Khalil

GitHub:
https://github.com/abdullahkhalil00

LinkedIn:
Add your LinkedIn profile here.

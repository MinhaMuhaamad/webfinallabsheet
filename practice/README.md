# Full Stack Application

A full stack application with React frontend and Node.js/Express/MongoDB backend.

## Project Structure

```
practice/
├── backend/           # Node.js, Express, MongoDB backend
│   ├── server.js      # Main server file
│   ├── package.json   # Backend dependencies
│   └── .env           # Environment variables
│
├── frontend/          # React frontend
│   ├── public/        # Static files
│   ├── src/           # React source code
│   │   ├── components/# React components
│   │   ├── App.js     # Main App component
│   │   └── index.js   # Entry point
│   └── package.json   # Frontend dependencies
│
└── README.md          # Project documentation
```

## Prerequisites

- Node.js and npm
- MongoDB (local installation or MongoDB Atlas)

## Getting Started

### 1. Start MongoDB

Make sure MongoDB is running on your local machine or you have a MongoDB Atlas connection string.

### 2. Start the Backend

```bash
cd backend
npm install
npm run dev
```

The server will start on http://localhost:5000

### 3. Start the Frontend

```bash
cd frontend
npm install
npm start
```

The React app will start on http://localhost:3000

## Features

- Create and view users
- MongoDB database integration
- React frontend with form validation
- RESTful API with Express

## API Endpoints

- GET /api/users - Get all users
- POST /api/users - Create a new user

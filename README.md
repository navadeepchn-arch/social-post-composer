# 📱 Social Post Composer

A full-stack MERN application that allows users to create, validate, and manage social media posts for multiple platforms with secure authentication and database persistence.

---

# 🌐 Live Demo

Frontend:
https://social-post-composer-six.vercel.app/

Backend API:
https://social-post-composer-api.onrender.com/

---

# 🔑 Demo Account

Use the following credentials to access the application:

```
Email:
navadeep@gmail.com

Password:
123456
```

Demo Flow:

```
Login
  |
  v
Dashboard
  |
  v
Create Post
  |
  v
Publish Post
  |
  v
View Saved Posts
```

---

# 📌 Project Overview

Social Post Composer is a MERN stack web application designed to simplify creating and managing social media content.

The application allows users to securely authenticate, create posts, select multiple social media platforms, validate content according to platform limits, and store posts permanently using MongoDB Atlas.

The project demonstrates complete full-stack development including React frontend, Express REST APIs, JWT authentication, MongoDB database operations, and cloud deployment.

---

# 🚀 Features

## 🔐 Authentication

- User Registration
- User Login
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes
- Token-based authorization

---

## ✍️ Post Composer

- Create new social media posts
- Add post title and content
- Select multiple platforms
- Real-time character counting
- Platform-specific validation
- Publish posts

---

## 📋 Post Management

- Store posts in MongoDB Atlas
- Retrieve published posts
- User-specific post access
- Persistent cloud database storage

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Axios
- React Router DOM
- CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT (JSON Web Token)
- bcryptjs

## Deployment

- Frontend: Vercel
- Backend: Render

---

# 🏗️ System Architecture

```
                         User

                          |
                          v

                  React Frontend
                     (Vercel)

                          |
                          v

                   Axios Requests

                          |
                          v

                 Express REST API
                    (Render)

                          |
                          v

             JWT Authentication Layer

                          |
                          v

                  MongoDB Atlas
```

---

# 📂 Project Structure

```
social-post-composer/

│
├── client/
│
│   ├── src/
│   │
│   │   ├── components/
│   │   │
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostForm.jsx
│   │   │   └── PostList.jsx
│   │
│   │   ├── pages/
│   │   │
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │
│   │   ├── services/
│   │   │
│   │   │   └── api.js
│   │
│   │   ├── utils/
│   │   │
│   │   │   └── auth.js
│   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
│
├── server/
│
│   ├── config/
│   │
│   │   └── db.js
│   │
│   ├── controllers/
│   │
│   │   ├── authController.js
│   │   └── postController.js
│   │
│   ├── middleware/
│   │
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │
│   │   ├── User.js
│   │   └── Post.js
│   │
│   ├── routes/
│   │
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔐 Authentication Flow

```
User Registration

        |
        v

Password Hashing using bcrypt

        |
        v

Store User in MongoDB

        |
        v

User Login

        |
        v

Generate JWT Token

        |
        v

Store Token in Client

        |
        v

Access Protected APIs
```

---

# 📊 Platform Validation

| Platform | Character Limit |
|----------|----------------|
| Twitter / X | 280 |
| LinkedIn | 3000 |
| Instagram | 2200 |
| Facebook | 63206 |

---

# 🔌 API Endpoints

## Authentication Routes

```
POST   /api/auth/register

POST   /api/auth/login
```

## Post Routes

```
POST   /api/posts

GET    /api/posts
```

Protected routes require JWT authentication.

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/navadeepchn-arch/social-post-composer.git
```

---

# Backend Setup

```bash
cd server

npm install

npm start
```

Create a `.env` file inside the server folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# ☁️ Deployment

## Frontend Deployment

Platform:

```
Vercel
```

Live URL:

```
https://social-post-composer-six.vercel.app/
```

---

## Backend Deployment

Platform:

```
Render
```

API URL:

```
https://social-post-composer-api.onrender.com/
```

---

# 🎯 Learning Outcomes

- Developed a complete MERN stack application from frontend to backend
- Learned React component-based architecture and state management
- Implemented REST API development using Node.js and Express.js
- Integrated MongoDB Atlas for cloud database storage
- Implemented secure authentication using JWT and bcrypt
- Learned frontend and backend communication using Axios
- Implemented CRUD operations for managing posts
- Learned deployment workflow using Vercel and Render
- Understood environment variable management for production applications

---

# 👨‍💻 Developer

**Navadeep**

MERN Stack Project
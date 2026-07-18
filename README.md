# 📱 Social Post Composer

A full-stack MERN application that allows users to create, validate, and manage social media posts for multiple platforms with secure authentication and database persistence.

## 🌐 Live Demo

Frontend (Vercel):
https://social-post-composer-six.vercel.app/

Backend API (Render):
https://social-post-composer-api.onrender.com/

---

# 📌 Project Overview

Social Post Composer is a MERN stack based web application built to simplify the process of creating and managing social media content.

The application allows users to securely login, create posts, select multiple social media platforms, validate content based on platform limits, and store posts permanently using MongoDB Atlas.

The project demonstrates full-stack development including frontend UI, REST API development, authentication, database operations, and cloud deployment.

---

# 🚀 Features

## 🔐 User Authentication

- User registration
- User login
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes
- Token-based authorization

---

## ✍️ Post Composer

- Create new social media posts
- Add post title and content
- Select multiple platforms
- Real-time character validation
- Platform-specific character limits
- Publish posts

---

## 📋 Post Management

- Store posts in MongoDB Atlas
- Retrieve user-specific posts
- Display published posts
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

- JSON Web Token (JWT)
- bcryptjs

## Deployment

- Frontend: Vercel
- Backend: Render

---

# 🏗️ System Architecture

                User

                  |
                  |

          React Frontend
              (Vercel)

                  |

            Axios Requests

                  |

         Express REST API
              (Render)

                  |

      JWT Authentication Layer

                  |

          MongoDB Atlas

---

# 📂 Project Structure


social-post-composer/

│
├── client/
│ │
│ ├── src/
│ │ │
│ │ ├── components/
│ │ │ Navbar.jsx
│ │ │ PostForm.jsx
│ │ │ PostList.jsx
│ │ │
│ │ ├── pages/
│ │ │ Login.jsx
│ │ │ Register.jsx
│ │ │ Dashboard.jsx
│ │ │
│ │ ├── services/
│ │ │ api.js
│ │ │
│ │ ├── utils/
│ │ │ auth.js
│ │ │
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ └── package.json
│
│
├── server/
│ │
│ ├── config/
│ │ db.js
│ │
│ ├── controllers/
│ │ authController.js
│ │ postController.js
│ │
│ ├── middleware/
│ │ authMiddleware.js
│ │
│ ├── models/
│ │ User.js
│ │ Post.js
│ │
│ ├── routes/
│ │ authRoutes.js
│ │ postRoutes.js
│ │
│ ├── server.js
│ └── package.json
│
└── README.md


---

# 🔐 Authentication Flow


User Registration

    |

Password Hashing using bcrypt

    |

Store User in MongoDB

    |

User Login

    |

Generate JWT Token

    |

Store Token in Client

    |

Access Protected APIs


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


POST /api/auth/register
POST /api/auth/login


## Post Routes


POST /api/posts
GET /api/posts


Protected routes require JWT authentication.

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/navadeepchn-arch/social-post-composer.git
Backend Setup
cd server

npm install

npm start

Create a .env file inside the server folder:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
Frontend Setup
cd client

npm install

npm run dev

Frontend runs on:

http://localhost:5173
☁️ Deployment
Frontend Deployment

Deployed using:

Vercel

Live URL:

https://social-post-composer-six.vercel.app/

Backend Deployment

Deployed using:

Render

API URL:

https://social-post-composer-api.onrender.com/

🎯 Learning Outcomes
MERN stack application development
React component architecture
REST API creation
JWT authentication implementation
MongoDB CRUD operations
Frontend and backend integration
Cloud deployment workflow
👨‍💻 Author

Navadeep

Social Post Composer - MERN Stack Project
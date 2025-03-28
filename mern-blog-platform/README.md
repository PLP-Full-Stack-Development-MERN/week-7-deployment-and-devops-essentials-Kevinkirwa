# MERN Blog Platform

A full-stack blog platform built with the MERN stack (MongoDB, Express.js, React, Node.js) with features for user authentication, blog post creation, and management.

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete blog posts
- Responsive design with Material-UI
- Protected routes for authenticated users
- Role-based access control (user/admin)
- Tag-based post organization
- Draft and published post states

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mern-blog-platform
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog-platform
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

5. Create a `.env` file in the frontend directory with:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- POST /api/users/register - Register a new user
- POST /api/users/login - Login user
- GET /api/users/me - Get current user

### Posts
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get single post
- POST /api/posts - Create a new post
- PUT /api/posts/:id - Update a post
- DELETE /api/posts/:id - Delete a post

## Deployment

### Backend Deployment (Render)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel)
1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
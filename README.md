# Login System Backend

## 📌 Overview
This is the **backend** for a user authentication system built using **Node.js, Express.js, and MongoDB**. It provides API endpoints for user registration, login, and authentication using **JWT (JSON Web Tokens)**.

## 🚀 Features
- User Registration
- User Login with JWT authentication
- Secure Password Hashing using bcrypt
- MongoDB for data storage
- Express.js for API handling
- Middleware for authentication
- Profile picture upload option

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt

## 📂 Folder Structure
```
Login-system-backend/
│-- models/       # MongoDB Models
│-- routes/       # API Routes
│-- config/       # Configuration files (DB connection, etc.)
│-- middleware/   # Authentication middleware
│-- server.js     # Main server file
│-- .env          # Environment variables
│-- package.json  # Project dependencies
│-- README.md     # Project documentation
```

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/shivang4857/Login-system-backend.git
cd Login-system-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install   # Install required packages
```

### **3️⃣ Configure Environment Variables**
Create a `config.js` file in the root directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=10000
```

### **4️⃣ Run the Server**
```sh
node server.js
```
The backend will run on `http://localhost:10000/`

## 🚀 Deployment
### **Deploy on Render/Vercel**
- Ensure `MONGO_URI` is set in environment variables
- Bind the server to `0.0.0.0`

## 📜 API Endpoints
| Method | Route          | Description             |
|--------|---------------|-------------------------|
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login and get JWT   |
| GET    | /api/user/profile  | Get user details (protected) |
|POST    | /api/user/update   | Update the user 

## 🔥 Future Enhancements
- Google & GitHub OAuth integration
- Forgot Password functionality
- Role-based authentication



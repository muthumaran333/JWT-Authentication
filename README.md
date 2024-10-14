
# MERN Stack Educational Platform ![MERN Logo](https://img.shields.io/badge/MERN-Stack-blue)

Welcome to the MERN Stack Educational Platform! This project allows users to register and log in, with functionality for managing educational records through a user-friendly dashboard.

## Features

- 🧑‍💻 **User Registration and Login**: Users can register and log in to the application.
- 📚 **Course Management**: Create, read, update, and delete course records.
- 📊 **Responsive Dashboard**: A modern and responsive UI built with React for displaying course information.
- 🔒 **Secure Password Handling**: Implement secure password management practices.
- 🌐 **Cross-Origin Resource Sharing (CORS)**: Enabled for seamless interaction between the front-end and back-end.

## Technologies Used

- 🎨 **Frontend**: React, Tailwind CSS
- 🖥️ **Backend**: Node.js, Express
- 🗄️ **Database**: MongoDB


## Screenshots

### 🖥️ Dashboard Page
![Dashboard](https://github.com/muthumaran333/jwt-authentication/blob/main/Images/jwt1.PNG)

*This is the main dashboard where users can view the course information in a well-organized and responsive interface. It provides options to create, edit, and delete courses.*

### 📝 Register Page
![Register](https://github.com/muthumaran333/jwt-authentication/blob/main/Images/Register.PNG)

*This is the user registration page where new users can create an account by providing their personal information, email, and password.*

### 🔑 Login Page
![Login](https://github.com/muthumaran333/jwt-authentication/blob/main/Images/jwtlog.PNG)

*This is the login page where existing users can sign in to access their accounts. It supports secure authentication using JWT.*

### 👤 Profile Page
![Profile](https://github.com/muthumaran333/jwt-authentication/blob/main/Images/profile.PNG)

*This is the user profile page where logged-in users can view their personal information and update their profile details.*

### 🗄️ Database
![Database](https://github.com/muthumaran333/jwt-authentication/blob/main/Images/database.PNG)


## Getting Started

### Prerequisites

- 📦 **Node.js** (>=14.x)
- 🍃 **MongoDB** (>=4.x)
- 📦 **npm** (Node Package Manager)

### Installation

#### 1. Clone the repository:
   ```bash
   git clone https://github.com/muthumaran333/jwt-authentication.git
   cd jwt-authentication
   ```

### 2. Install Dependencies


#### Backend (JWT Auth)
Navigate to the `jwt-auth-backend` folder:
   ```bash
   cd jwt-auth-backend
   ```

Install the backend dependencies:
   ```bash
   npm install
   ```

The main backend dependencies include:
- 🛠️ **express**: For building the API.
- 🍃 **mongoose**: For MongoDB interaction.
- 🔒 **bcrypt**: For password hashing.
- 🌍 **cors**: For enabling CORS.
- 🛠️ **dotenv**: For environment variables management.
- ✅ **express-validator**: For request validation.

#### Frontend (JWT Auth)
Navigate to the `jwt-auth-frontend` folder:
   ```bash
   cd ../jwt-auth-frontend
   ```

Install the frontend dependencies:
   ```bash
   npm install
   ```

The main frontend dependencies include:
- ⚛️ **react**: For building the UI.
- 🌐 **axios**: For making HTTP requests.
- 🧭 **react-router-dom**: For handling routing in React.
- 🎨 **tailwindcss**: For styling the frontend.

### 3. Set Up Environment Variables

#### Backend (JWT Auth)
In the `jwt-auth-backend` folder, create a `.env` file and add your MongoDB URI and other necessary environment variables:

```
MONGO_URI=mongodb://127.0.0.1:27017/EducationalPlatform
PORT=5000
```

### 4. Running the Application

#### Backend (JWT Auth)
To run the backend server, navigate to the `jwt-auth-backend` folder and run:
   ```bash
   npm start
   ```

#### Frontend (JWT Auth)
To run the frontend application, navigate to the `jwt-auth-frontend` folder and run:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`, and the backend will be accessible via `http://localhost:5000`.

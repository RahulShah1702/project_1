# Volunteer App

Welcome to the Volunteer App! This is a simple web application to manage volunteer registrations and admin tasks. Built with modern web technologies, it helps volunteers sign up and admins approve them.

## What It Does
- **Volunteers**: Register and apply to help.
- **Admins**: Log in to review and accept volunteer applications.

## How It Works
- **Frontend**: A React app (built with Vite) where users interact.
- **Backend**: A Node.js/Express server that handles data and logic.
- **Database**: MongoDB to store volunteer and user info.

## Getting Started

### Prerequisites
- Git (to clone the repo)
- Node.js (for running the app locally)
- MongoDB Atlas account (for the database)

### Installation
1. Clone the repo:
```
git clone https://github.com/RahulShah1702/project_1.git
cd project_1
```

2. Install backend dependencies:
```
cd server
npm install

```

3. Install frontend dependencies:
```
cd ../client
npm install

```
4. Set up environment variables:
- Create a `.env` file in the `server` folder.
- Add your MongoDB URI:

```
MONGODB_URI=mongodb+srv://<username>:<yourpassword>@cluster0.snajylk.mongodb.net/volunteerApp?retryWrites=true&#x26;w=majority</yourpassword>
```
(Replace `<username>,<yourPassword>` with your MongoDB username password.)

### Running Locally
1. Start the backend:

```
cd server
npm start
```
2. Start the frontend:
```
cd ../client
npm run dev
```

##Screenshots

### Home Page
<img width="1914" height="911" alt="Screenshot 2025-08-06 232736" src="https://github.com/user-attachments/assets/a7e73688-fbbd-4865-8990-296b7ede1b79" />

### Register Page
<img width="1889" height="879" alt="Screenshot 2025-08-06 184911" src="https://github.com/user-attachments/assets/05c81cf0-15ec-487e-b8d8-b2e6841b6ba0" />

### Admin Login Page
<img width="1910" height="821" alt="Screenshot 2025-08-07 022546" src="https://github.com/user-attachments/assets/1c6f78a1-4cd4-475f-bf8e-6b5dd2cad942" />

### Admin Dashboard Page
<img width="1874" height="927" alt="Screenshot 2025-08-07 022813" src="https://github.com/user-attachments/assets/9bd1cac1-382d-41fe-a7d1-df55f84a7f29" />


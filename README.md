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
<img width="1912" height="933" alt="Screenshot 2025-08-07 022525" src="https://github.com/user-attachments/assets/98462aad-f796-4f3c-b7d2-c8ecf9981eac" />

### Register Page
<img width="1910" height="821" alt="Screenshot 2025-08-07 022546" src="https://github.com/user-attachments/assets/a8cedd86-43f0-44ea-b23e-eeb87dbfeb41" />

### Admin Login Page
<img width="1874" height="927" alt="Screenshot 2025-08-07 022813" src="https://github.com/user-attachments/assets/6ef3f642-59d0-405f-9b95-b7567fa2c248" />

### Admin Dashboard Page
<img width="1915" height="919" alt="Screenshot 2025-08-07 022837" src="https://github.com/user-attachments/assets/775119f2-5399-4e4c-b4b3-849593334d81" />

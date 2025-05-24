#  🌍 Travel Booking - Parichaye 

A full-stack travel booking web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to explore and book travel packages, while providing administrators with tools to manage packages, users, bookings, and reviews.

## 🌐 Live Demo

[Click here to view the live site](https://travel-booking-seven-kohl.vercel.app)

## 🛠️ Features

### User Functionality

- Browse and search for travel packages
- View detailed information about each package
- Book travel packages with ease
- Submit reviews and ratings for packages
- User authentication and profile management

### Admin Functionality

- Dashboard overview of platform metrics
- Add, edit, and delete travel packages
- Manage user accounts and bookings
- Review moderation and management
- Secure admin authentication

## 🧰 Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel (Frontend), Render (Backend)


## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/vansh27-ash/Travel-Booking.git
cd Travel-Booking
```

2. Install dependencies for both client and server:
 ```bash
 # Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the application:

```bash
# Start the backend server
cd server
npm start

# In a new terminal, start the frontend
cd ../client
npm start
```


Frontend will run at http://localhost:3000 and backend at http://localhost:5000.

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request with improvements.



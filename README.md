### Project Title

# MERN Stack Student Authentication on AWS

-----

### Description

This project is a full-stack student authentication system built with the **MERN** (MongoDB, Express.js, React, Node.js) stack and deployed on the **AWS Cloud**. It features a secure login and registration process for students using their unique PRN (Permanent Registration Number) and a password.

The purpose of this project is to demonstrate an end-to-end deployment workflow for a MERN application using the AWS Free Tier, showcasing skills in cloud services, API development, and frontend-backend integration.

-----

### Features

  * **Student Authentication**: Secure login and registration for students.
  * **API**: A RESTful API built with Express.js and Node.js for handling authentication requests.
  * **Database**: Uses MongoDB to store student data, including PRN and hashed passwords.
  * **Responsive UI**: A simple and clean login form built with React.
  * **Cloud Deployment**: The backend is hosted on an **Amazon EC2** instance, and the database is managed by **MongoDB Atlas**.

-----

### Technologies Used

  * **Frontend**:
      * React
      * Axios (for API calls)
  * **Backend**:
      * Node.js
      * Express.js
      * bcrypt.js (for password hashing)
      * jsonwebtoken (JWT) (for authentication)
  * **Database**:
      * MongoDB (hosted on MongoDB Atlas)
  * **Cloud & DevOps**:
      * AWS EC2
      * Git & GitHub

-----

### Getting Started

#### Prerequisites

  * Node.js (LTS version)
  * npm (comes with Node.js)
  * A MongoDB Atlas account (free tier is sufficient)
  * An AWS account (with AWS Free Tier access)

#### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory with your MongoDB connection string:
    ```
    MONGO_URI="your_mongodb_atlas_connection_string"
    ```
3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    Update the API endpoint in `frontend/src/Login.js` to point to your deployed backend's URL.
    ```javascript
    const response = await axios.post('http://<your-ec2-public-ip>:<your-api-port>/api/auth/login', ...);
    ```

-----

### Deployment

This project's deployment uses the following services:

  * **Backend**: The Node.js/Express.js API is deployed on an AWS EC2 `t2.micro` instance using a process manager like PM2.
  * **Database**: The MongoDB database is managed by MongoDB Atlas's free tier, simplifying setup and maintenance.

-----

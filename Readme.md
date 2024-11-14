# Fullstack Task Manager SaaS

# Overview

The Cloud-Based Task Manager is a web application designed to streamline team task management. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this platform provides a user-friendly interface for efficient task assignment, tracking, and collaboration. The application caters to administrators and regular users, offering comprehensive features to enhance productivity and organization.

## Problem?

In a dynamic work environment, effective task management is crucial for team success. Traditional methods of task tracking through spreadsheets or manual systems can be cumbersome and prone to errors. The Cloud-Based Task Manager aims to address these challenges by providing a centralized platform for task management, enabling seamless collaboration and improved workflow efficiency.

###

## **Admin Features:**

1. **User Management:**

   - Create admin accounts.
   - Add and manage team members.

2. **Task Assignment:**

   - Assign tasks to individual or multiple users.
   - Update task details and status.

3. **Task Properties:**

   - Label tasks as todo, in progress, or completed.
   - Assign priority levels (high, medium, normal, low).
   - Add and manage sub-tasks.

4. **Asset Management:**

   - Upload task assets, such as images.

5. **User Account Control:**
   - Disable or activate user accounts.
   - Permanently delete or trash tasks.

## **User Features:**

1. **Task Interaction:**

   - Change task status (in progress or completed).
   - View detailed task information.

2. **Communication:**
   - Add comments or chat to task activities.

## **General Features:**

1. **Authentication and Authorization:**

   - User login with secure authentication.
   - Role-based access control.

2. **Profile Management:**

   - Update user profiles.

3. **Password Management:**

   - Change passwords securely.

4. **Dashboard:**
   - Provide a summary of user activities.
   - Filter tasks into todo, in progress, or completed.

## **Tech Stack:**

- **Frontend:**

  - React (Vite)
  - Redux Toolkit for State Management
  - Headless UI
  - Tailwind CSS

- **Backend:**
  - Node.js with Express.js
- **Database:**
  - MongoDB for efficient and scalable data storage.

&nbsp;

## SETUP INSTRUCTIONS

# Server Setup

## Environment variables

First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:

- MONGODB_URI = `your MongoDB URL`
- ACCESS_TOKEN_SECRET = `Access token secret`
- ACCESS_TOKEN_EXPIRY = `It ususally requires short period of time varied from 15min to 2 day`
- REFRESH_TOKEN_SECRET = `Refresh token secret`
- REFRESH_TOKEN_EXPIRY = `It usually requires long period of time varied from 5 to 10 days`

For Image and other file upload, Go to Cloudinary - https://cloudinary.com

- CLOUDINARY_CLOUD_NAME = `Your Cloudinary Cloud Name`
- CLOUDINARY_API_NAME = `Cloudinary Api Name`
- CLOUDINARY_API_SECRET = `Cloudinary Api Keys`
- CORS_ORIGIN = \*
- PORT = `8000` or any port number

&nbsp;

## Set Up MongoDB:

1. Setting up MongoDB involves a few steps:

   - Visit MongoDB Atlas Website

     - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

   - Create an Account
   - Log in to your MongoDB Atlas account.
   - Create a New Cluster
   - Choose a Cloud Provider and Region
   - Configure Cluster Settings
   - Create Cluster
   - Wait for Cluster to Deploy
   - Create Database User
   - Set Up IP Whitelist
   - Connect to Cluster
   - Configure Your Application
   - Test the Connection

2. Create a new database and configure the `.env` file with the MongoDB connection URL.

## Steps to run server

1. Open the project in any editor of choice.
2. Navigate into the server directory `cd server`.
3. Run `npm i` or `npm install` to install the packages.
4. Run `npm run dev` to start the server.

If configured correctly, you should see a message indicating that the server is running successfully and `Database Connected`.

&nbsp;

# Client Side Setup

## Environment variables

First, create the environment variables file `.env` in the client folder. The `.env` file contains the following environment variables:

- VITE_APP_BASE_URL = `http://localhost:8000` #Note: Change the port 8000 to your port number.

## Steps to run client

1. Navigate into the client directory `cd client`.
2. Run `npm i` or `npm install` to install the packages.
3. Run `npm run dev` to run the app on `http://localhost:3000`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Food Ordering Website with React and Node.js

Welcome to the Food Ordering Website, a project built using React and Node.js. This web application allows users to browse a variety of food options, place orders, and enjoy a seamless user experience with features such as authentication and pagination.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Authentication](#authentication)
5. [Pagination](#pagination)
6. [Folder Structure](#folder-structure)
7. [Technologies Used](#technologies-used)

## Introduction

This project is a web-based food ordering platform that simplifies the process of discovering and ordering delicious meals. It has been developed using React for the front-end and Node.js for the back-end. With a user-friendly interface, robust authentication system, and pagination for better navigation, this website offers a delightful food ordering experience.

## Features

- **User Authentication**: Users can create accounts, log in, and manage their profiles. Secure authentication ensures user data safety.

- **Food Catalog**: Browse a wide range of food items with detailed descriptions, images, and prices.

- **Order Placement**: Select items from the catalog, customize your order, and place it with ease.

- **Pagination**: The catalog is paginated to provide efficient navigation, especially when there are many food items to display.

- **Responsive Design**: The website is designed to be responsive and work seamlessly on different devices and screen sizes.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/AyushKumar15082001/Foodie.git
    ```
  
2. Navigate to the project directory:

   ```bash
   cd Foodie
   ```
   
3. Install the required dependencies for the front-end and back-end:

- Front-end (React):

  ```bash
  cd client
  npm install
  ```

- Back-end (Node.js):

  ```bash
  cd server
  npm install
  ```

4. Configure the environment variables for the authentication system, database connection, and other settings.

5. Start the development servers:

- Front-end (React):

  ```bash
  npm start
  ```

- Back-end (Node.js):

  ```bash
  npm start
  ```

6. Access the website in your browser at `http://localhost:3000`.

## Authentication

The website implements user authentication using JWT (JSON Web Tokens) for secure access. Users can register, log in, and update their profiles. Authentication ensures that only registered users can place orders and access their account information.

## Pagination

The catalog of food items is paginated to improve the user experience. It allows users to browse through multiple pages of food items, making it easier to discover new options and find what they want quickly.

## Folder Structure

The project is organized into two main directories:

- `client`: Contains the front-end React application.
- `server`: Contains the back-end Node.js application.

Each directory has its own README file with more specific instructions and details.

## Technologies Used

- **Front-end**:
- React
- React Router for navigation
- Axios for API requests
- Redux for state management

- **Back-end**:
- Node.js
- Express.js for API routing
- MongoDB for data storage
- JWT for authentication

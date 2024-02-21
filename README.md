
# Book Search Engine Project

## Table of Contents
- [Overview](#overview)
- [Project Requirements](#project-requirements)
  - [User Stories](#user-stories)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)

## Overview
This project is a Book Search Engine that allows users to search for books, create an account, and save their favorite books. The application features a user-friendly interface with functionalities such as searching for books, user authentication (signup/login/logout), saving books to a user's account, and viewing saved books.

## Project Requirements

### User Stories
As a user, when I load the search engine, I am presented with a menu with the options Search for Books and Login/Signup, an input field to search for books, and a submit button.

As a user, when I click on the Search for Books menu option, I am presented with an input field to search for books and a submit button.

As a non-logged-in user, when I enter a search term and click the submit button, I am presented with search results featuring a book’s title, author, description, image, and a link to that book on the Google Books site.

As a user, when I click on the Login/Signup menu option, a modal appears on the screen with a toggle between the option to log in or sign up.

As a user, when the toggle is set to Signup, I am presented with three inputs for a username, an email address, and a password, and a signup button.

As a user, when the toggle is set to Login, I am presented with two inputs for an email address and a password, and a login button.

As a user, when I enter a valid email address and create a password and click on the signup button, my user account is created, and I am logged into the site.

As a user, when I enter my account’s email address and password and click on the login button, the modal closes, and I am logged into the site.

As a logged-in user, the menu options change to Search for Books, an option to see my saved books, and Logout.

As a logged-in user, when I enter a search term and click the submit button, I am presented with search results featuring a book’s title, author, description, image, and a link to that book on the Google Books site, and a button to save a book to my account.

As a user, when I click on the Save button on a book, that book’s information is saved to my account.

As a user, when I click on the option to see my saved books, I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site, and a button to remove a book from my account.

As a user, when I click on the Remove button on a book, that book is deleted from my saved books list.

As a user, when I click on the Logout button, I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup, an input field to search for books, and a submit button.

## Getting Started

  1. Clone the repository:

    git clone https://github.com/kcmead/book-search-engine.git

  2. Navigate to the project directory:

    cd book-search-engine

  3. Install dependencies for the server and client:
    
    npm install
    cd client
    npm install

  4. Run the development server:

    npm start

  5. Open your browser and go to http://localhost:3000 to view the application.

## Technologies Used
  - Frontend: React, Apollo Client
  - Backend: Node.js, Express, GraphQL, MongoDB
  - Authentication: JWT (JSON Web Tokens)
  - Styling: CSS, Bootstrap 

## Contributors
  - KC Mead

## Acknowledgments
  - This project was developed as part of a coding bootcamp curriculum.

  - Special thanks to the instructors and mentors who provided guidance and support.
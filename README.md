This project is an Airbnb-like web application built using Node.js, Express, MongoDB, and EJS. The app allows users to create, view, and review listings of properties. The authentication and authorization processes are managed using Passport.js, and sessions are stored securely using MongoDB.

Key Features:
Listing Management: Users can create, view, update, and delete property listings.
User Authentication: Secure login and registration using Passport.js with sessions stored in MongoDB.
Review System: Users can leave reviews on listings.
Session Management: Sessions are managed with secure cookies and stored in MongoDB using connect-mongo.
Flash Messages: User feedback is provided using flash messages for various actions.
Tech Stack:

Backend: Node.js, Express, MongoDB, Mongoose
Frontend: EJS, HTML, CSS
Authentication: Passport.js, Passport-Local
Session Management: Express-Session, Connect-Mongo
Environment Setup:


Environment variables are managed using dotenv.
The app is configured to connect to MongoDB Atlas for database storage.

Error Handling:
Custom error handling is implemented using an ExpressError utility.
All unhandled routes are captured and return a 404 error page.


How to Run Locally:
Clone the repository.
Install the required dependencies using npm install.
Set up environment variables (.env) for MongoDB URI and other secrets.
Run the application using node app.js.
Access the application at http://localhost:8080.

# URL Shortener Project 

## Overview

This is a URL shortener project that allows you to convert long URLs into shorter, more manageable links. It uses Node.js with Express for the backend and MongoDB as the database to store URL mappings. This README provides information on how to set up and use the URL shortener.

## Prerequisites

Before you get started, make sure you have the following installed:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).
- MongoDB: You can download and install MongoDB from [mongodb.com](https://www.mongodb.com/).

## Installation

Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```
## Change to the project directory:

```bash

cd url-shortener
```
## Install project dependencies using npm:

```bash
npm install
```
## Configuration
Create a .env file in the project root directory to store environment-specific configuration variables. Add the following variables to it:

```readme
PORT=3000  # Specify the port you want the server to run on
MONGO_URI=<your-mongodb-uri>  # MongoDB connection URI
```
Replace <your-mongodb-uri> with the actual URI of your MongoDB database.

## Running the Application
Start the server by running the following command:

```bash
npm start
```
This will start the server and listen on the port specified in the .env file (default is 3000).

Access the application by opening a web browser and navigating to http://localhost:<port>, where <port> is the value you specified in the .env file (default is 3000). You should see a "Hello world" message on the homepage.

## Usage
To shorten a URL, make a POST request to the /url/shorten endpoint with a JSON payload containing the longUrl parameter. Here's an example using cURL:


curl -X POST -H "Content-Type: application/json" -d '{"longUrl":"https://example.com"}' http://localhost:<port>/url/shorten
Replace <port> with the actual port number.

The response will contain the shortened URL, like this:

```json
{
  "shortUrl": "http://localhost:<port>/abc123"
}
```
You can then use the shortened URL to redirect users to the original long URL.

## Database
This project uses MongoDB as the database to store URL mappings. The database connection is established in the connect.js file located in the utils directory. Make sure your MongoDB server is running, and the connection URI in the .env file is correct.

## Project Structure
```bash
index.js: Main application file.
routes/url.js: Defines the URL shortening route.
utils/connect.js: Contains the MongoDB database connection logic.
.env: Configuration file for environment variables.
package.json: Node.js package configuration.
README.md: This README file.
License
```
This project is open-source and available under the MIT License.

## Author
Created by Sudipta Jana


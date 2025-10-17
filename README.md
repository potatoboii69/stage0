# Backend Wizards — Stage 0 Task

## Description
This project is a simple REST API that returns my profile information and a dynamic cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

## Setup Instructions
1. Clone repository
git clone https://github.com/<your-username>/backend-wizards-stage0.git

2. Navigate to the project folder
cd backend-wizards-stage0

3. Install dependencies
npm install

4. Start the development server
npm start

5. Visit Endpoint(use browser or postman)
http://localhost:3000/me

## Dependencies
express-------> For creating and managing the REST API Server
nodemon(dev dependency) -----------> Automatically restarts the server during development

# Run server
npm start

# Run in development mode
npm run dev

## Endpoint
**GET** `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "email": "jerryrhq@gmail.com",
    "name": "Nwofor Jerry Ikem",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats have five toes on their front paws, but only four on the back."
}

# Backend Wizards — Stage 0 Task

## Description
This project is a simple REST API that returns my profile information and a dynamic cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

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

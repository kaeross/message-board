# Message board

A simple message board app.

## Getting started

Install the dependencies

```
npm i
```

Make sure mongod is running 
```
mongod
```

## Using the app

### Retrieving messages
Make a get request (you can use postman or similar) to `http://localhost:4000/messages` to see a list of messages currently stored in the database.

### Posting messages
Make a post request (you can use postman or similar) to `http://localhost:4000/message` to post a single message.

Headers: `Content-type:application/json`

Request body:
```
{
    "message": "Your message here"
}
```

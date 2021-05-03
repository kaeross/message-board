import { MessageController } from './controllers/message.controller';
import express from 'express';
import { DatabaseConnection } from './database/connect';

// Connect to database
new DatabaseConnection().connect();

const app = express();
app.use(express.json());

// Routing
app.get('/messages', async (req, res, next) => {
    try {
        await new MessageController().getMessages(req, res);
    }
    catch(e) {
        return res.status(e.status).send(e.message);
    }
});

app.post('/message', async (req, res, next) => {
    try {
        await new MessageController().storeMessage(req, res);
    }
    catch(e) {
        return res.status(e.status).send(e.message);
    }
});

app.listen(4000, () => {
    console.log("App is listening on port 4000");
})
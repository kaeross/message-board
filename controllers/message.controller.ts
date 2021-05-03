import { Request, Response } from 'express';
import { IMessage } from '../models/message.model';
import { MessageService } from '../services/message.service';

export class MessageController {
    private service = new MessageService();

    /**
     * Retrieves the messages from the service layer
     * 
     * @param req the express request
     * @param res the express response
     * 
     * @returns an express response containing an array of formatted message objects
     */
    public async getMessages(req: Request, res: Response): Promise<Response<IMessage[]>> {
        try {
            const messageDocs = await this.service.getMessages();
            const formattedMessages = messageDocs.map((doc) => ({ message: doc.message } as IMessage));
            
            return res.status(200).send(formattedMessages);
        }
        catch(e) {
            throw e;
        }
    }

    public async storeMessage(req: Request, res: Response): Promise<Response> {
        try {
            const message = req.body;

            // Check message is formatted correctly
            if (!this.validateMessageFormat(message)) {
                throw { status: 400, message: "Message is not formatted correctly" }
            }

            await this.service.storeMessage(message);

            return res.status(200).send("Message has been posted to the message board");

        }
        catch(e) {
            throw e;
        }
    }

    /**
     * Validates a message
     * 
     * @param message the message to be validated
     * @returns true if the message is valid
     */
    private validateMessageFormat(message: any): boolean {
        if (typeof message !== "object") {
            return false;
        }

        const hasMessageProperty = message.hasOwnProperty("message");
        const messageValueIsString = typeof message.message === "string";

        return hasMessageProperty && messageValueIsString;
    } 
}
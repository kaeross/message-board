import { IMessage, MessageDoc, MessageModel } from '../models/message.model';

export class MessageService {
    /**
     * Handles retrieving the messages stored in the database.
     * Will return an empty array if no messages are found.
     * 
     * @returns an array of message documents
     */
    public async getMessages(): Promise<MessageDoc[]> {
        try {
            return await MessageModel.find({});
        }
        catch(e) {
            throw { status: 500, message: `Error retrieving messages: ${e.message}` };
        }
    }

    /**
     * Handles storing the message object. Does not return anything
     * 
     * @param message a message object
     */
    public async storeMessage(message: IMessage): Promise<void> {
        try {
            await MessageModel.create(message);
        }
        catch(e) {
            throw { status: 500, message: `Error creating a message: ${e.message}` };
        }
    }
}
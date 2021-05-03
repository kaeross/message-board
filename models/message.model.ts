import { Document, model, Schema } from 'mongoose';

// Describes a basic message interface
interface IMessage {
    message: string;
}

// Describes the message document type
type MessageDoc = IMessage & Document;

// The Mongoose model for messages
const MessageModel = model<MessageDoc>('Message', new Schema({
    message: String
}));

export {
    IMessage,
    MessageDoc,
    MessageModel
}
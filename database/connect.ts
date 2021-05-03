import mongoose from 'mongoose';

/**
 * Connects to a database named 'messageboard'
 */
export class DatabaseConnection {
    private dbString = 'mongodb://localhost/messageboard';
    
    /**
     * Sets up a new connection to a mongodb database
     */
    public async connect(): Promise<void> {
        mongoose.connect(this.dbString, {useNewUrlParser: true, useUnifiedTopology: true});

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => {
          console.log('connection open')
        });
    }
} 
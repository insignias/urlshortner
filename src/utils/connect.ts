import mongoose from "mongoose";
import config from 'config';

export default async function connect() {
    const uri = config.get<string>('dbUri');
    let connection;
    try {
        connection = await mongoose.connect(uri)
        console.log('DB connected !')
    } catch (error: any) {
        console.error(`Could not connect to the DB: ${error.message}`)
    }
}
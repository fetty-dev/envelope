import mongoose from "mongoose";
import { DATABASE_CONFIG } from '../utils/constants';

export async function connectDB(): Promise<void> {
    try {
        const conn = await mongoose.connect(DATABASE_CONFIG.uri, DATABASE_CONFIG.options);
        console.log(`✅ MongoDB connected successfully at: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB connection failed:`, error);
        process.exit(1);
    }
}

export async function disconnectDB(): Promise<void> {
    await mongoose.disconnect();
    console.log(`🔌 MongoDB disconnected...`);
}
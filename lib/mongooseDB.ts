// lib/mongooseDB.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        const opts = {
            dbName: "blogPlatform",
            bufferCommands: false,
            maxPoolSize: 10,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then(() => mongoose.connection);
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        console.error("Error while connecting to DB: ", error);
        throw new Error("DB connection failed");
    }

    return cached.conn;
}
export default connectToDB
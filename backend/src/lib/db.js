import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB is connected on ${conn.connection.host}`);
    } catch (error) {
        console.log("Error in connecting to MongoDB", error);
        process.exit(1); // 1 means failure
    }
}
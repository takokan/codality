import mongoose from "mongoose"

async function connectDB(){
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
};

export default connectDB;
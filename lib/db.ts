import mongoose, { mongo } from "mongoose"

export const databaseconnection = async()=>{
    const MONGO_URI= process.env.MONGO_URI as string 

    try {
        if (!MONGO_URI)
        {
            return console.log("MONGO_URI not Found");
        }
        await mongoose.connect(MONGO_URI);
        return console.log("Database Connected Successfully!");
    } catch (error) {
        return console.log("Internal Server error",error);
    }
}
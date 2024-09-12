import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://OmkarPatil9881:OmkarPatil14@cluster0.vor1jcf.mongodb.net/myApp?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("DB connected"))
} 


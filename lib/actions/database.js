"use server"
import mongoose from "mongoose";

let isConnected=false;
export const connectToDb=async()=>{

    
    if(!process.env.MONGODB_URL) return console.log('mongodb url not found');
    if(isConnected) return console.log("already connected");
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected=true;

    }catch(e){
        console.log("could not connect to database");
        isConnected=false;
    }
}
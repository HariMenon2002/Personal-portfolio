import { connectToDb } from "@/lib/actions/database";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    console.log("hi guys")
    await connectToDb();
    const {firstname,lastname,email,phone,message}=await req.json();
    console.log('firstname is ',firstname)
    const user=new User({firstname,lastname,email,phone,message});
    await user.save();
    return NextResponse.json({ message: 'User registered successfully' });
}
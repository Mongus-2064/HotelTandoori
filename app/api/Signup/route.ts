import {z} from "zod"
import User from "@/Models/User"
import { databaseconnection } from "@/lib/db"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req:Request){
    try {
        await databaseconnection();
        const formdata = await req.formData();
        const username = formdata.get("username") as string
        const email = formdata.get("email") as string
        const password = formdata.get("password") as string

        const userschema = z.object({
            username: z.string().min(1, "Username is required").min(3, "Username mustbe greater than 3 characters"),
            email: z.email().min(1 , "email is required"),
            password: z.string().min(1,"Passoword is required").min(6,"password must be atleast greater than 6 characters"),
            
        })

        const validateddata = userschema.parse({username, email,password});

        

        const hashedpassword = await bcrypt.hash(validateddata.password , 10)

        await User.create({
            username , email, password:hashedpassword  
        });

        return  NextResponse.json(  {msg:"Account Created successfully",emailresponse:validateddata.email ,usernameresponse:validateddata.username}, {status:201});

    } catch (error) {
        return NextResponse.json({err:"Error:",error}, {status:500})
    }
}
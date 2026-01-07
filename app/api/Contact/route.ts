import { databaseconnection } from "@/lib/db";
import Contact from "@/Models/Contact";
import { NextResponse } from "next/server";

export  async function POST(req:Request){
try {
    await databaseconnection();
    const body = await req.json();
    const {message} = body;

    if(!message)
    {
        return NextResponse.json({msg:"Empty message cannot be send"},{status:404});
    }

    const usermessage = await Contact.create({
        message
    });

    return NextResponse.json({msg:"Thanks for your feedback"},{status:200});

} catch (error) {
    return NextResponse.json({err:"Internal server error",error},{status:500});
}
}
import cloudinary from "@/config/cloudinary";
import { databaseconnection } from "@/lib/db";
import Menu from "@/Models/Menu";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try {
        await databaseconnection();
        const formData = await req.formData();
        const name = formData.get("name") as string
        const price = formData.get("price") as string
        const desc = formData.get("desc") as string
        const pic = formData.get("pic") as File

       if(!name || !price || !desc || !pic)
       {
        return NextResponse.json("Hey,Admin please include all fields");
       }

       const arraybuffer = await pic.arrayBuffer();
       const buffer = Buffer.from(arraybuffer);

       const uploadpic: {secure_url:string} = await new Promise((resolve , reject)=>{
        cloudinary.uploader.upload_stream({
            folder:"Food"
        },
    
    (error , result)=>{
        if(error) reject(error)
            else resolve(result as {secure_url:string});
    }).end(buffer)
       });

       const fooditem = await Menu.create({
        name , price,desc,photo:uploadpic.secure_url
       });

       return NextResponse.json({msg:"Food item uploaded successfully!",data:fooditem}, {status:201});

    } catch (error) {
        return NextResponse.json({msg:"Error While Uploading data"}, {status:500})
    }
}
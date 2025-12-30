import { z } from "zod"
import User from "@/Models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { databaseconnection } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        await databaseconnection();
        const formdata = await req.formData();
        const username = formdata.get("username") as string
        const email = formdata.get("email") as string
        const password = formdata.get("password") as string

        // VALIDATING IF USER HAD ALL INFO OR NOT USING ZOD

        const userschema = z.object({
            username: z.string().min(1, "username is required").min(3, "Username must be greater than 3 characters"),
            email: z.email().min(1, "Please enter Your email"),
            password: z.string().min(1, "Password is required").min(6, "Password must be atleast 6 characters")
        })

        const validateddata = userschema.parse({ username, email, password });


const useremail =  validateddata.email;
const userpassword = validateddata.password

        // USER EXISTS IN DATABASE OR NOT ??

        const user = await User.findOne({ email:useremail });

        if (!user) {
            return NextResponse.json({ msg: "Sorry user is not registered" }, { status: 404 });
        }

        // CHECKING PASSWORD

        const checkpassword = await bcrypt.compare(userpassword, user.password);
        if (!checkpassword) {
            return NextResponse.json({ msg: "Invalid password" }, { status: 401 });
        }

        // JWT TOKEN CREATION

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1h" });

        return NextResponse.json({ msg: "Logged in Successfully", token }, { status: 200 })


    } catch (error) {
        return NextResponse.json({ msg: "Internal Server Error", error }, { status: 500 });
    }
}


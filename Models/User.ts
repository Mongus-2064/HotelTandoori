import mongoose, { Document, Model } from "mongoose"

interface IUser extends Document{
    username: string,
    email: string,
    password: string,
}

const Userschema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    

});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User",Userschema );

export default User
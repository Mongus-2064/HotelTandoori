import mongoose, { Schema,Model } from "mongoose"

interface IContact extends Document{
    message:string
}

const ContactSchema = new Schema({
    message:{
        type:String,
        required:true,
    }
});

const Contact: Model<IContact> = mongoose.models.Cotact || mongoose.model<IContact>("Contact",ContactSchema); 

export default Contact;
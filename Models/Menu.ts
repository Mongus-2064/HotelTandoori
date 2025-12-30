import mongoose, { Document, Schema,Model } from "mongoose"

interface IMenu extends Document {
    name: string,
    price: string,
    desc: string,
    photo: string
}


const Menuschema = new Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true
    }

});

const Menu: Model<IMenu> = mongoose.models.Menu || mongoose.model<IMenu>("Menu",Menuschema); 

export default Menu
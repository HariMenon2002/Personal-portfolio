
import mongoose,{Schema} from "mongoose";

const UserSchema=new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true},
    message: { type: String, required: true},
})

const User=mongoose.models.User || mongoose.model('User',UserSchema)
export default User;
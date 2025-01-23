import mongoose {Schema} from "mongoose"

const userSchema = new Schema(
    {
username:{
    type:String,
    required:[true,'Username is Required']
    unique:true,
    lowercase:true,
    trim:true,
    index:true,
},
email : {
    type:String,
    required:[true,"Email id is Required"]
    lowercase:true,
    trim:true,
    unique:true
},
fullname:{
    type:String,
    required:true,
    trim:true,
    index:true,
},
password:{
    type:String,
    required:[true,'Password is Required']
},
avatar: {
    type: String, // cloudinary url
    required: true,
},
refreshToken:{
    type:String
}
},
timestamps:true
)

export const User = mongoose.model("User", userSchema)
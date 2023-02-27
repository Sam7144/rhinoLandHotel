import mongoose from 'mongoose'
const emailSchema=new mongoose.Schema(
    {
        
        email:{
            type:String,
            required:true,
            unique:true,
        },
    },{
        timestamps:true
    }
)
const emailUser=mongoose.models.emailUser||mongoose.model('emailUser',emailSchema);
export default emailUser
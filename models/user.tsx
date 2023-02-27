import mongoose from 'mongoose'
const hotelSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
        },
        orgTel:{
            type:String,
            required:true,
        },
        Address:{
            type:String,
            required:true,
        },
        City:{
            type:String,
            required:true,
        },
        Postalcode:{
            type:String,
            required:true,
        },
        Country:{
            type:String,
            required:true,
        }
    },{
        timestamps:true
    }
)
const HotelUser=mongoose.models.HotelUser||mongoose.model('HotelUser',hotelSchema);
export default HotelUser
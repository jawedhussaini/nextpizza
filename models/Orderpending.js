import mongoose from "mongoose";

const Orderpending=new mongoose.Schema({
    customer:{
        type:String,
        required:true,
        maxlenght:60

    },
    address:{
        type:String,
        required:true,
        maxlenght:200

    },
    phone:{
        type:String,
        required:true,
        maxlenght:60

    },
    
    pizatitle:{
        type:String,
        required:true,
        maxlenght:60
    },
      quantity:{
        type:Number,
        required:true,
    },
     totals:{
        type:Number,
        required:true
    },
    status:{
        type:[Number],
        default:0
    },
    
    method:{
        type:[Number],
        require:true
    },
  
},
{timestamps:true,
 versionKey:false}
)
export default mongoose.models.Orderpending || mongoose.model("Orderpending",Orderpending)
import mongoose from "mongoose";

const Blogs=new mongoose.Schema({
     titel:{
        type:String,
        required:true,
        maxlenght:100

    },
      img:{
        type:String,
        required:true
    }
    ,
    desc:{
        type:String,
        require:true,
        maxlenght:400
    }

},
{timestamps:true,
 versionKey:false}
)
export default mongoose.models.Blogs || mongoose.model("Blogs",Blogs)
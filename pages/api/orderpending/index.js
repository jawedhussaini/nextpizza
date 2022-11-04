import dbConnection from "../../../utilites/mongo";
import Orderpending from "../../../models/Orderpending";

export default async function handler(req,res){
    await dbConnection
    const {method}=req
    if(method==="GET"){
        try {
            const orders=await Orderpending.find()
            res.status(200).json(orders)
            
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    if(method==="POST"){
         try {
            const orders=await Orderpending.create(req.body)
            res.status(201).json(orders)
            
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}
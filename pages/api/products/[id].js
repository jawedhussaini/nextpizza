import dbConnection from "../../../utilites/mongo"
import Product from "../../../models/Product"
export default async function handler(req, res) {
const {method,query:{id}}=req
 
dbConnection()

if(method==="GET"){
    try {
        const product=await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }

}
if(method==="POST"){
try {
    const product=await Product.create(req.body)
    res.status(201).json(product)
    
} catch (err) {
  res.status(500).json(err)  
}
}

if(method==="DELETE"){
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json("product has bin deleted")
    } catch (error) {
        res.status(500).json(error)
    }

}
 if (method === "PUT") {
    try {
      const order = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

}
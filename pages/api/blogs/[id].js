import dbConnection from "../../../utilites/mongo"
import Blog from "../../../models/Blog";
export default async function handler(req, res) {
const {method,query:{id}}=req
 
dbConnection()

if(method==="GET"){
    try {
        const product=await Blog.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }

}
if(method==="POST"){
try {
    const product=await Blog.create(req.body)
    res.status(201).json(product)
    
} catch (err) {
  res.status(500).json(err)  
}
}

if(method==="DELETE"){
    try {
        await Blog.findByIdAndDelete(id);
        res.status(200).json("product has bin deleted")
    } catch (error) {
        res.status(500).json(error)
    }

}
 if (method === "PUT") {
    try {
      const order = await Blog.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

}
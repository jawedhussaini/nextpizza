import dbConnection from "../../../utilites/mongo"
import Blog from "../../../models/Blog";
export default async function handler(req, res) {
const {method}=req
 
dbConnection()

if(method==="GET"){
    try {
        const products=await Blog.find();
        res.status(200).json(products)
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

}
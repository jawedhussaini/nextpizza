import {connect,connection} from "mongoose"
const con={
    isconected:false

}
export default async function dbConnection()
{
    if(con.isconected) return;
    const db=await connect('mongodb://localhost:27017/pizza')
    con.isconected=db.connections[0].readyState;
    console.log(db.connection.db.databaseName)
}
connection.on("connected",()=>{
    console.log("connected to mongo db")
})
connection.on("error",(err)=>{
    console.log("mongo error",err.massage)
})
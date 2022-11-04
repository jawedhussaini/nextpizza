import {  useState } from "react";
import styles from "../styles/OrderDetail.module.css"
import { useRouter } from "next/router";
import { reset } from "../redux/cardSlice";
import axios from "axios";
import { useDispatch } from "react-redux";





const OrderDetail=(props)=>{
     const [customer,setcustomer]=useState('')
     const [phone,setphone]=useState('')
     const [address,setaddress]=useState('')
     const [totals,settotals]=useState(props.total)
     const [titles,settitle]=useState(props.title)
     const [quantitys,setquantitys]=useState(props.quantity)
     const dispatch=useDispatch()
     const router=useRouter
    
    console.log(titles,quantitys,totals)

     const handelclick=async ()=>{
        
    try{
      const res=await axios.post("http://localhost:3000/api/orderpending",{
        
            customer:customer,
            address:address,
            phone:phone,
            pizatitle:titles,
            quantity:quantitys,
            totals:totals

            
        
      })
      console.log(res.data)
          
      if(res.status===201){
        console.log("added")
        router.push("/")
          console.log(router.push("/"))
        dispatch(reset())
      } 

    }
    catch(err){
      console.log(err)
    }
  }
 

     
    return(
        <div className={styles.container}>
           <div className={styles.wrapper}>
            <h1 className={styles.title}>oyu well pay 12$ after delivery</h1>
            <div className={styles.item}>
                <label className={styles.label}>Name And Sername</label>
                <input type="text" placeholder="Jhon deo" required className={styles.input} onChange={(e)=>setcustomer(e.target.value)} />
            </div>
             <div className={styles.item}>
                <label className={styles.label}>+91 88 7854 345</label>
                <input type="text" placeholder="phone" required className={styles.input} onChange={(e)=>setphone(e.target.value)} />
            </div>
             <div className={styles.item}>
                <label className={styles.label} >address</label>
                <textarea placeholder="new york" required onChange={(e)=>setaddress(e.target.value)}></textarea>
            </div>
            <button className={styles.button} onClick={handelclick}>ordr</button>
            </div> 

        </div>
    )
}
export default OrderDetail;
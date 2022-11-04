import {  useState } from "react";
import styles from "../styles/OrderDetail.module.css"
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { reset, setmodels } from "../redux/cardSlice";
 




const OrderDetail=(props)=>{
     const [customer,setcustomer]=useState('')
     const [phone,setphone]=useState('')
     const [address,setaddress]=useState('')
     const [totals,settotals]=useState(props.total)
     const [titles,settitle]=useState(props.title)
    const getquantity=useSelector((state)=>state.cart.quantity)
     const [quantitys,setquantitys]=useState(props.quantity)
     const [ordersetuation,setordersetuation]=useState(false)
     const [ordermessage,setordermessage]=useState()
     const dispatch=useDispatch()
     const router=useRouter()

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
      
          
      if(res.status===201){
        setordermessage(true)
        setordersetuation(true)
      const newproducts=props.id
      dispatch(reset({newproducts,totals,quantitys}))

   
      
      } 

    }
    catch(err){
      console.log(err)
      setordermessage(false)
      setordersetuation(true)
    }
  }
 

     
    return(
        <div className={styles.container}>
          <span onClick={() => props.setmodel(false)} className={styles.close}>X</span>
           <div className={styles.wrapper}>
            <h1 className={styles.title}>oyu well pay 12$ after delivery</h1>
            <div className={styles.item}>
                <label className={styles.label}>Name And Sername</label>
                <input type="text" placeholder="Jhon deo" required className={styles.input} onChange={(e)=>{setcustomer(e.target.value);setordersetuation(false)}} />
            </div>
             <div className={styles.item}>
                <label className={styles.label}>+91 88 7854 345</label>
                <input type="text" placeholder="phone" required className={styles.input} onChange={(e)=>{setphone(e.target.value);setordersetuation(false)}} />
            </div>
             <div className={styles.item}>
                <label className={styles.label} >address</label>
                <textarea placeholder="new york" required onChange={(e)=>{setaddress(e.target.value);setordersetuation(false)}}></textarea>
            </div>
            <button className={styles.button} onClick={handelclick}>ordr</button>
           {ordersetuation && <span className={ordermessage ? styles.success :styles.unsuccess}>{ordermessage ? 'Order Sended Successfully' :'Any Field Required'}</span>
}             
           </div> 

        </div>
    )
}
export default OrderDetail;
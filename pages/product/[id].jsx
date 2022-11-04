import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addproduct } from "../../redux/cardSlice";
import { useSelector } from "react-redux";

const Product = ({pizza}) => {

const [price,setprice]=useState(pizza.prices[0])
const [size,setsize]=useState(0)
const [extras,setexpras]=useState([])
const [id,setid]=useState()
const dispatch=useDispatch()
const cart=useSelector((state)=>state.cart)
const bb=useSelector((state)=>state.cart.ordermodel)
const [quantity,setquantity]=useState(1)
const [xx,setxx]=useState(false)
const handelSize=(sizeindex)=>{
  const deferince=pizza.prices[sizeindex]-pizza.prices[size]
  setid(pizza._id)
  setsize(sizeindex)
  handelprice(deferince)
}
const handelprice=(deferince)=>{
setprice(price+deferince)
}
const handelChange=(e,option)=>{
  const checked=e.target.checked
  if(checked){
    setprice(price+option.price)
    setexpras([...extras,option])
  }
  else{
    setexpras(extras.filter((extras)=>extras._id!==option._id))
    setprice(price-option.price)
  }
}
const handelclick=()=>{
  console.log(bb)
  cart.product.map((carts)=>{
    if(carts._id===pizza._id){
     return bb=true
    }
    else{
      bb=false
    }
  })
  
{bb ? console.log(xx):dispatch(addproduct({...pizza,extras,price,quantity,bb}))}



  

  

}

console.log(extras)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handelSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handelSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handelSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {
            pizza.extraoption.map((options)=>{
              return(
            <div className={styles.option} key={options._id}>
            <input
              type="checkbox"
              id={options.text}
              name={options.text}
              className={styles.checkbox}
              onChange={(e)=>{handelChange(e,options)}}
            />
            <label htmlFor="double">{options.text}</label>
          </div>
              )
            })
          }
         
         
        </div>
        <div className={styles.add}>
            <input onChange={(e)=>setquantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button} onClick={handelclick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
 

export const getServerSideProps=async({params})=>{
const res=await axios(`http://localhost:3000/api/products/${params.id}`)
return {
  props:{
    pizza:res.data
  }
}
}

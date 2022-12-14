import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";
import OrderDetail from "../components/OrderDetail";

const Cart = () => {
  const [title,settitle]=useState('')
  const [quantity,setquantity]=useState(0)
  const [total,settotal]=useState(0)
  const [id,setid]=useState(null)
  const cart=useSelector((state)=>state.cart)
  const [model,setmodel]=useState(false)

 
  
 
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            
          </tr>
          {cart.product.map((product)=>(
          <tr className={styles.tr} key={product._id}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={product.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{product.title}</span>
            </td>
            <td>
               <span className={styles.extras}>
              {product.extras.map((extra)=>(

            
              <span key={extra._id}>
                {extra.text}
              </span>
            
                ))}
                  </span>
            </td>
            <td>
              <span className={styles.price}>{product.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>{product.quantity*product.price}</span>
            </td>
            <td>
               <button className={styles.button} onClick={()=>{setquantity(product.quantity);settitle(product.title);settotal(product.quantity*product.price);setid(product._id);setmodel(!model);}}>pay with deleivery cash</button>
            </td>
          </tr>
         ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>{cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>{cart.total}
          </div>
         
        </div>
        
      </div>
      {model && <OrderDetail id={id}  total={total} title={title} quantity={quantity} setmodel={setmodel}/>}

    </div>
    
  );
};

export default Cart;

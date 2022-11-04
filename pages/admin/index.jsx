import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Update from "../../components/Update";
import UpdateBloge from "../../components/UpdateBloge";
import styles from "../../styles/Admin.module.css";
import { BsPenFill } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import SideBar from "../../components/SideBar";


const Index = ({ orders, products,blog }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const [blogs,setblogslist]=useState(blog)
  const [id,setid]=useState()
  const [title,settitle]=useState('')
  const [desc,setdesc]=useState('')
  const [price,setprice]=useState([])
  const [model,setmodel]=useState(false)
  const [img,setimg]=useState('')
  const [blogmodel,setblogmodel]=useState(false)
  const status = ["preparing","delivered"];

  const handleDelete = async (id) => {
    
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
 

    try {
      const res = await axios.put("http://localhost:3000/api/orderpending/" + id, {
        status:1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };
   const handleDeleteOrder=async (id)=>{

      try {
      const res = await axios.delete(
        "http://localhost:3000/api/orderpending/" + id
      );
      setOrderList(orderList.filter((order) => order._id !== id));
    } catch (err) {
      console.log(err);
    }

   }
   const handleDeleteblog=async (id)=>{
    console.log(id)
    try{
    const res= await axios.delete("http://localhost:3000/api/blogs/"+id)
    setblogslist(blogs.filter((blogss)=>blogss._id!==id))
  }

     catch(err){
      console.log(err)
     }
   }

  return (
    <>
    <div className={styles.wraper}>
      <SideBar/>
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button} onClick={()=>{setid(product._id);settitle(product.title);setdesc(product.desc);setprice(product.prices);setimg(product.img);setmodel(true)}}><BsPenFill color='white' size={18}/></button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    <BsFillTrashFill color='white' size={18}/>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
       <div className={styles.item}>
        <h1 className={styles.title}>Blogs</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </tbody>
          {blogs.map((blog) => (
            <tbody key={blog._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={blog.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{blog._id.slice(0, 5)}...</td>
                <td>{blog.titel}</td>
                <td>
                  <button className={styles.button} onClick={()=>{setid(blog._id);settitle(blog.titel);setdesc(blog.desc);setimg(blog.img);setblogmodel(true)}}><BsPenFill color='white' size={18}/></button>
                  <button
                    className={styles.button}
                    onClick={() => handleDeleteblog(blog._id)}
                  >
                    <BsFillTrashFill color='white' size={18}/>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
     
      {model && <Update title={title} desc={desc} id={id} price={price} img={img} setmodel={setmodel}/>}
      {blogmodel && <UpdateBloge title={title} desc={desc} id={id} price={price} img={img} setblogmodel={setblogmodel}/>}
    </div>
    <div className={styles.container}>
     <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>address</th>
              <th>phone</th>
              <th>pizzatitle</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>{order.pizatitle}</td>
                <td>{order.quantity}</td>
                <td>${order.totals}</td>
               
                <td>{status[order.status]}</td>
                <td>
                  <button  className={styles.nextStage} onClick={() => handleStatus(order._id)}>
                    <BsChevronDoubleRight color='white' size={18}/>
                  </button>
                   
                  
                      <button  className={styles.button} onClick={() => handleDeleteOrder(order._id)}>
                    <BsFillTrashFill color='white' size={18}/>
                  </button>
                  </td>
               
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      </div>
      </div>
   </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orderpending");
  const blog = await axios.get("http://localhost:3000/api/blogs");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
      blog: blog.data,
    },
  };
};

export default Index;
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import Add from "../components/Add";
import Addbutton from "../components/Addbutton";
import Porfolio from "../components/Porfolio";
import OuerClient from "../components/OuerClient";
import Blogs from "../components/Blogs";
import Blogbtn from "../components/Blogbtn";
import AddBloge from "../components/AddBlog";


export default function Home({pizzaslist,admin,blog}) {
  const [close,setclose]=useState(true)
  const [closeblogebtn,setcloseblogebtn]=useState(true)
 
  return (
     
    <div className={styles.container}>
      {console.log(blog)}
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Porfolio/>
      {admin && <Addbutton setclose={setclose}/>}
      <PizzaList pizzaslist={pizzaslist}/>
      <OuerClient/>
       {admin && <Blogbtn setcloseblogebtn={setcloseblogebtn}/>}
      <Blogs blog={blog}/>
      {!close&& <Add setclose={setclose}/>}
      {!closeblogebtn && <AddBloge setcloseblogebtn={setcloseblogebtn}/>}
    </div> 
  );
}
export const getServerSideProps=async(ctx)=>{
const mycookie=ctx.req.cookies || '';
let admin=false
console.log(mycookie)

if(mycookie.token===process.env.TOKEN){
  admin=true
}
const res=await axios("http://localhost:3000/api/products")
const blog=await axios("http://localhost:3000/api/blogs")
return {
  props:{
    pizzaslist:res.data,
    admin,
    blog:blog.data
  }
}
}



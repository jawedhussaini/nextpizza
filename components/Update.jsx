import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";


const Update = (props) => {
const [id,setid]=useState(props.id)
const [title,settitle]=useState(props.title)
const [desc,setdesc]=useState(props.desc)
const [smallp,setsmallp]=useState(props.price[0])
const [medialp,setmeialp]=useState(props.price[1])
const [largp,setlargp]=useState(props.price[2])
const [file, setFile] = useState(null);
const [filepath,setfilepath]=useState(props.img)


const handelUpdate=async ()=>{
     try {
        setfilepath(`/img/${file}`)
      const res = await axios.put("http://localhost:3000/api/products/" + id, {
        title:title,
        desc:desc,
        prices:[smallp,medialp,largp],
        img:filepath,
        
      });
      props.setmodel(false)
      
   
    } catch (err) {
      console.log(err);
    }
}



  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => props.setmodel(false)}>
          X
        </span>
        <h1>Update pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setfilepath('/img/'+e.target.files[0].name)}/>
        </div>
        <div className={styles.item}>
          <label className={styles.label} >Title</label>
          <input
            className={styles.input}
            type="text"
           defaultValue={props.title}
           onChange={(e)=>settitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            defaultValue={props.desc}
            onChange={(e)=>setdesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Small"
            defaultValue={props.price[0]}
             onChange={(e)=>setsmallp(e.target.value)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Medium"
             defaultValue={props.price[1]}
              onChange={(e)=>setmeialp(e.target.value)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Large"
            defaultValue={props.price[2]}
             onChange={(e)=>setlargp(e.target.value)}
            />
          </div>
        </div>
     
        <button className={styles.addButton} onClick={handelUpdate}>
          update
        </button>
      </div>
    </div>
  );
};

export default Update;
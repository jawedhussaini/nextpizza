import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";

const UpdateBloge = (props) => {
const [id,setid]=useState(props.id)
const [title,settitle]=useState(props.title)
const [desc,setdesc]=useState(props.desc)
const [file, setFile] = useState(null);
const [filepath,setfilepath]=useState(props.img)


const handelUpdate=async ()=>{
     try {
        setfilepath(`/img/${file}`)
      const res = await axios.put("http://localhost:3000/api/blogs/" + id, {
        titel:title,
        desc:desc,
        img:filepath,
        
      });
        props.setblogmodel(false)
    } catch (err) {
      console.log(err);
    }
}



  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.close} onClick={() => props.setblogmodel(false)}>
          X
        </span>
        <h1>Update Blog</h1>
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
   
     
        <button className={styles.addButton} onClick={handelUpdate}>
          update
        </button>
      </div>
    </div>
  );
};

export default UpdateBloge;
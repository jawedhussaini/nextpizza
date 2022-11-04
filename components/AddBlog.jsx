import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";

const AddBloge = (props) => {
  const [file, setFile] = useState(null);
  const [filepath,setfilepath]=useState('')
  const [titel, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);




const handleCreate=async ()=>{
  setfilepath(`/img/${file}`)
    console.log(filepath)
    const data={
      titel,
      img:filepath,
      desc
      
    }
    try{
    await axios.post("http://localhost:3000/api/blogs",data)
   props.setcloseblogebtn(true)}
catch(err){
console.log(err)
}
  
  } 

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => props.setcloseblogebtn(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new Bloge</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0].name)} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default AddBloge;
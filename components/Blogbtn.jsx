import styles from '../styles/Add.module.css'
import { AiOutlineZoomIn } from "react-icons/ai";
const Blogbtn=({setcloseblogebtn})=>{
return (
    <div className={styles.mainaddbutton}>
        <span onClick={()=>setcloseblogebtn(false)}><AiOutlineZoomIn color='white' size={25}/></span>
    </div>
)
}
export default Blogbtn
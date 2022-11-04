import styles from '../styles/Add.module.css'
import { AiOutlineZoomIn } from "react-icons/ai";
const Addbutton=({setclose})=>{
return (
    <div className={styles.mainaddbutton}>
        <span onClick={()=>setclose(false)}><AiOutlineZoomIn color='white' size={25}/></span>
    </div>
)
}
export default Addbutton
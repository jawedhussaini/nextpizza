
import styles from "../styles/Footer.module.css";
import { AiFillIeCircle } from "react-icons/ai";
import { AiFillSkype } from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
const Footer = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
      <div className={styles.icons}><AiFillIeCircle size={40} color='#FFB423'/>
          <AiFillSkype size={40} color='#FFB423'/>
          <AiFillYoutube size={40} color='#FFB423'/>
           <AiOutlinePhone size={40} color='#FFB423'/>
          
         
      </div>
      
         
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
         
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

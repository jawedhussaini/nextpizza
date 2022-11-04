import Link from 'next/link'
import styles from '../styles/SideBar.module.css'
import { AiOutlineHome } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiBananaBunch } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { BiConfused } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { AiOutlineApple } from "react-icons/ai";



function SideBar() {
    return (
        <div className={styles.container}>
            <div className={styles.wraper}>
                <h3 className={styles.name}>Admin</h3>
                <Link href='/' className={styles.sidelink}><span className={styles.span}>Home <AiOutlineHome size={25}/></span></Link>
                <Link href='/' className={styles.sidelink}><span className={styles.span}>Product <RiProductHuntLine size={25}/></span></Link>
                <Link href='/' className={styles.sidelink}><span className={styles.span}>Cart <AiOutlineShoppingCart size={25}/></span></Link>
                <Link href='/' className={styles.sidelink}><span className={styles.span}>Banana <GiBananaBunch size={25}/></span></Link>
                <Link href='/' className={styles.sidelink}><span className={styles.span}>Apple <AiOutlineApple size={25}/></span></Link>
                <Link href='/' className={styles.sidelink}><span className={styles.span}>Blogs <ImBlogger2 size={25}/></span></Link>
                <Link href='/' className={styles.sidelink}><span className={styles.span}>Icons <BiConfused size={25}/></span></Link>
                <button className={styles.logout}><CiLogout size={30}/></button>

            </div>
        </div>
    )
}

export default SideBar

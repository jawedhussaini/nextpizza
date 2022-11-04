import styles from '../styles/OurClient.module.css'
import { BsFillStarFill } from "react-icons/bs";
function OuerClient() {
    return (
        <div className={styles.container}>
               <h1 className={styles.header}>Our Clients</h1>
            <div className={styles.wraper}>
             
                <div className={styles.item}>
                    <div className={styles.logo}>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                    </div>
                    <div className={styles.message}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae doloribus deserunt. Tempore exercitationem architecto laborum accusamus dicta. Autem quis asperiores quidem, vero hic itaque ea consequuntur rem possimus optio.
                    </div>
                    <div className={styles.client}>
                        <div>
                            <img src='/img/ss.jpeg' className={styles.clientimg} alt=""/>
                        </div>
                        <div className={styles.clientdetails}>
                            <span className={styles.job}>pizza cooke</span>
                            <span className={styles.name}>jawed hussaini</span>

                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.logo}>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                    </div>
                    <div className={styles.message}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae doloribus deserunt. Tempore exercitationem architecto laborum accusamus dicta. Autem quis asperiores quidem, vero hic itaque ea consequuntur rem possimus optio.
                    </div>
                    <div className={styles.client}>
                        <div>
                            <img src='/img/ss.jpeg' className={styles.clientimg} alt=""/>
                        </div>
                        <div className={styles.clientdetails}>
                            <span className={styles.job}>Pizza Maker</span>
                            <span className={styles.name}>Mark Fergosen</span>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.logo}>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                        <BsFillStarFill size={10} color='#FFB423'/>
                    </div>
                    <div className={styles.message}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae doloribus deserunt. Tempore exercitationem architecto laborum accusamus dicta. Autem quis asperiores quidem, vero hic itaque ea consequuntur rem possimus optio.
                    </div>
                    <div className={styles.client}>
                        <div>
                            <img src='/img/ss.jpeg' className={styles.clientimg} alt=""/>
                        </div>
                        <div className={styles.clientdetails}>
                            <span className={styles.job}>Chef</span>
                            <span className={styles.name}>Anna Mary</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OuerClient

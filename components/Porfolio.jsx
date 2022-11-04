import styles from '../styles/Portfolio.module.css'

function Porfolio() {
    return (
        <div className={styles.container} style={{ 
      backgroundImage: `url("/img/ss.jpeg")` 
    }}>
        <div className={styles.wraper}>
            <div className={styles.item}>
            <h1 className={styles.header}>THIS IS <span className={styles.color}>THE</span> BEST WEBSIDE FOR <span className={styles.color}>ORDERING</span> PIAZZA IN <span className={styles.color}>TAWN</span></h1>
            <p className={styles.descpar}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nisi labore aperiam magni reprehenderit. Aperiam, cupiditate? Possimus porro officiis delectus, voluptatem dolorem unde ipsum, maxime soluta alias optio totam ullam.</p>
            <button className={styles.btnorder}>Order select</button>
        </div>

        </div>
        </div>
    )
}

export default Porfolio

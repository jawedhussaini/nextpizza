import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({piza}) => {
  return (
    <div className={styles.container}>
      <Link href={`product/${piza._id}`}>
      <Image src={piza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{piza.title}</h1>
      <span className={styles.price}>{piza.prices[0]}</span>
      <p className={styles.desc}>
        {piza.desc}
      </p>
    </div>
  );
};

export default PizzaCard;

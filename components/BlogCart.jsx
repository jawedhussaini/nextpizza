import Image from "next/image";
import styles from "../styles/PlogCart.module.css";
import Link from "next/link";

const BlogCart = ({blog}) => {
  return (
    
    <div className={styles.container}>
        <h1 className={styles.title}>{blog.titel}</h1>
    <Link href={`blogs/${blog._id}`}>
      <Image className={styles.blogimg} src={blog.img} alt="" width="500" height="300" />
      </Link>
      <p className={styles.desc}>
        {blog.desc.slice(0,150)}
      </p>
    </div>
  );
};

export default BlogCart;

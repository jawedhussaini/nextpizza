import styles from "../../styles/BlogDetail.module.css"
import axios from "axios"
function BlogDetail({blog}) {
    return (
        <div className={styles.container}>
          <div className={styles.wraper}>
            <div className={styles.img}><img className={styles.img} src={blog.img} alt="" /></div>
            <div className={styles.text}>
                <h1 className={styles.header}>{blog.titel}</h1>
                <p className={styles.desc}>{blog.desc}</p>
            </div>
          </div>
        </div>
    )
}


export const getServerSideProps=async({params})=>{
const res=await axios(`http://localhost:3000/api/blogs/${params.id}`)
return {
  props:{
    blog:res.data
  }
}
}

export default BlogDetail 

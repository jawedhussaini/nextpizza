import styles from '../styles/blog.module.css'
import BlogCart from './BlogCart'

function Blogs({blog}) {
    return (
        <>
        <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
         {blog.map((blog)=>{
          return(
            <BlogCart key={blog._id} blog={blog}/>
          )
         })}
         
       
          
      </div>
      </div>
      </>
    
    )
}

export default Blogs

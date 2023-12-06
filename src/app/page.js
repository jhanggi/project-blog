import BlogPostList from "@/components/BlogPostList";
import styles from "./homepage.module.css";
import { BLOG_TITLE } from "@/constants";

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      <BlogPostList />
    </div>
  );
}

export default Home;

export const metadata = {
  title: BLOG_TITLE,
};

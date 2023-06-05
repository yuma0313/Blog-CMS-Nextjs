import BlogTemplates from "../Templates/BlogTemplates";
import { BlogType } from "../Molecules/Blog";

type BlogIndexProps = {
  blog: BlogType[];
};

const BlogIndex: React.FC<BlogIndexProps> = ({ blog }) => {
  return <BlogTemplates blog={blog} />;
};

export default BlogIndex;

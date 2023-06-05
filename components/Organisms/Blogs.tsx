import Blog, { BlogType } from "../Molecules/Blog";

type BlogsProps = {
  blog: BlogType[];
};

const Blogs: React.FC<BlogsProps> = ({ blog }) => {
  return (
    <div className="p-4 my-3 bg-gray-50 w-full sm:w-3/5 mr-5">
      <ul>
        {blog.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
};

export default Blogs;

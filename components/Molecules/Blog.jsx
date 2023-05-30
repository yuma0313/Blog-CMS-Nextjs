import Link from "next/link";
import BlogTitle from "../Atoms/Blog/BlogTitle";
import BlogImage from "../Atoms/Blog/BlogImage";
import BlogCreatedAt from "../Atoms/Blog/BlogCreatedAt";
import BlogCategory from "../Atoms/Blog/BlogCategory";

const Blog = ({ blog }) => {
  return (
    <div>
      <Link href={`/blog/${blog.id}`}>
        <div className="mb-10">
          <div className="cursor-pointer flex flex-col sm:flex-row">
            <BlogImage image={blog.eyecatch.url} />
            <div className="flex flex-col w-full">
              <BlogTitle title={blog.title} />
              <BlogCreatedAt date={blog.publishedAt} />
              <BlogCategory category={blog.category.name} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

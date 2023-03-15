import Link from "next/link";

const Blog = ({ blog }) => {
  return (
    <div>
      <Link href={`/blog/${blog.id}`}>
        <div className="cursor-pointer ">
          <p className="text-3xl font-bold">{blog.title}</p>
          <p className="mb-3">{blog.publishedAt}</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

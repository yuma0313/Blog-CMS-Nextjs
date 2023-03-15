import Link from "next/link";
import Moment from "react-moment";

const Blog = ({ blog }) => {
  return (
    <div>
      <Link href={`/blog/${blog.id}`}>
        <div className="mb-5">
          <div className="cursor-pointer flex">
            <img src={blog.eyecatch.url} width={300} height={300} />
            <div className="flex flex-col w-full">
              <p className="text-2xl font-bold mx-2 my-2">{blog.title}</p>
              <p className="flex justify-end mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Moment format="YYYY/MM/DD">{blog.publishedAt}</Moment>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

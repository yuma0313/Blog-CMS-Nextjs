import Link from "next/link";
import Moment from "react-moment";

const Blog = ({ blog }) => {
  return (
    <div className="">
      <Link href={`/blog/${blog.id}`}>
        <div className="mb-10">
          <div className="cursor-pointer flex">
            <div className="w-96 mr-5 drop-shadow-md">
              <img src={blog.eyecatch.url} className="w-full h-44" />
            </div>
            <div className="flex flex-col w-full">
              <p className="text-2xl font-bold mx-2 my-2">{blog.title}</p>
              <div className="flex justify-end mx-2">
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
              </div>
              <p className="my-2 ml-auto mr-2 float-right rounded-2xl bg-gray-500 text-white py-1 px-4">
                {blog.category && blog.category.name}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

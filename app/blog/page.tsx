import { format } from "date-fns";
import Link from "next/link";
import { client } from "../../lib/client";
import Profile from "../_components/Profile";
import { MdAccessTime } from "react-icons/md";

export default async function BlogPage() {
  const data = await client.get({ endpoint: "blog" });
  const blogs = data.contents;

  return (
    <div className="my-5 flex flex-col sm:flex-row justify-center mx-5 min-h-[calc(100vh_-_100px)]">
      <div className="flex flex-col gap-y-6 p-4 bg-gray-50 w-full sm:w-3/5 mr-5">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`}>
            <div className="cursor-pointer flex flex-col sm:flex-row">
              <div className="w-full sm:w-96 mr-5 drop-shadow-md">
                <img src={blog.eyecatch.url} className="w-full h-44" />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-2xl tracking-wide font-bold mx-2 my-2">
                  {blog.title}
                </p>
                <div className="flex justify-end mx-2">
                  <MdAccessTime className="w-6 h-6" />
                  <span className="text-black">
                    {format(blog.createdAt, "yyyy/MM/dd")}
                  </span>
                </div>
                <p className="bg-gray-500 my-2 ml-auto mr-2 float-left rounded-2xl text-white py-1 px-4">
                  {blog.category.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full sm:w-72 mt-3 sm:ml-6">
        <Profile />
      </div>
    </div>
  );
}

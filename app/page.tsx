export const revalidate = 0;

import { Suspense } from "react";
import { client } from "../lib/client";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import { format } from "date-fns";
import TodayTodoList from "./_components/TodayTodoList";

export default async function Home() {
  const data = await client.get({ endpoint: "blog" });
  const blogs = data.contents.slice(0, 3);

  return (
    <div className="flex flex-row p-4 w-full justify-evenly h-full">
      <div className="flex flex-col gap-y-2 bg-gray-50 p-4 rounded-md">
        <h2 className="text-2xl font-bold">最新ブログTOP3</h2>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col gap-y-6 bg-gray-50">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.id}`}>
                <div className="cursor-pointer flex flex-col sm:flex-row max-w-[600px]">
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
        </Suspense>
      </div>

      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <TodayTodoList />
      </Suspense>
    </div>
  );
}

const Loading = () => <div>Loading...</div>;

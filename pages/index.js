import Blog from "../components/Blog";
import Layout from "../components/Layout";
import { client } from "../lib/client";

export default function Home({ blog }) {
  return (
    <Layout title="ブログ一覧">
      <div className="my-5 flex justify-around mx-5 min-h-[calc(100vh_-_100px)]">
        <div className="p-3 my-3 bg-gray-300 w-3/5">
          <ul>
            {blog.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </ul>
        </div>
        <div className="p-3 my-3 bg-gray-300 w-72 ">
          <div className="bg-gray-500">検索</div>
          <div className="mt-3 bg-gray-500">プロフィール</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
}

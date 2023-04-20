import Blog from "../components/Parts/Blog";
import Layout from "../components/Parts/Layout";
import Profile from "../components/Parts/Profile";
import { client } from "../lib/client";

export default function Home({ blog }) {
  return (
    <Layout title="ブログ一覧">
      <div className="my-5 flex flex-col md:flex-row justify-center mx-5 min-h-[calc(100vh_-_100px)]">
        <div className="p-4 my-3 bg-gray-50 w-full md:w-3/5 mr-5">
          <ul>
            {blog.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </ul>
        </div>
        <div className="w-full md:w-72 mt-3 md:ml-6">
          <Profile />
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

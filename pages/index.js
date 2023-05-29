import { client } from "../lib/client";
import BlogIndex from "../components/Pages/BlogIndex";

export default function Home({ blog }) {
  return <BlogIndex blog={blog} />;
}

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
}

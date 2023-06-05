import { client } from "../lib/client";
import BlogIndex from "../components/Pages/BlogIndex";
import { GetStaticProps } from "next";
import { BlogType } from "../components/Molecules/Blog";

type HomeProps = {
  blog: BlogType[];
};

const Home: React.FC<HomeProps> = ({ blog }) => {
  return <BlogIndex blog={blog} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

import Layout from "../Organisms/Layout";
import Blogs from "../Organisms/Blogs";
import Profile from "../Molecules/Profile";
import { BlogType } from "../Molecules/Blog";

type BlogTemplatesProps = {
  blog: BlogType[];
};

const BlogTemplates: React.FC<BlogTemplatesProps> = ({ blog }) => {
  return (
    <Layout title="ブログ一覧">
      <div className="my-5 flex flex-col sm:flex-row justify-center mx-5 min-h-[calc(100vh_-_100px)]">
        <Blogs blog={blog} />
        <div className="w-full sm:w-72 mt-3 sm:ml-6">
          <Profile />
        </div>
      </div>
    </Layout>
  );
};

export default BlogTemplates;

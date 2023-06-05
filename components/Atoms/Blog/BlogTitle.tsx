//propsの型定義
type BlogTitleProps = {
  title: string;
};

const BlogTitle: React.FC<BlogTitleProps> = ({ title }) => {
  return <p className="text-2xl tracking-wide font-bold mx-2 my-2">{title}</p>;
};

export default BlogTitle;

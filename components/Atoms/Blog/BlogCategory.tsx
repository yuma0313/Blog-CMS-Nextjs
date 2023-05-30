type BlogCategoryProps = {
  category: string;
};

const BlogCategory: React.FC<BlogCategoryProps> = ({ category }) => {
  return (
    <p className="my-2 ml-auto mr-2 float-right rounded-2xl bg-gray-500 text-white py-1 px-4">
      {category}
    </p>
  );
};

export default BlogCategory;

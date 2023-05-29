const BlogCategory = ({ props }) => {
  const category = props;

  return (
    <p className="my-2 ml-auto mr-2 float-right rounded-2xl bg-gray-500 text-white py-1 px-4">
      {category}
    </p>
  );
};

export default BlogCategory;

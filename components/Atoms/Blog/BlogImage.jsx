const BlogImage = ({ props }) => {
  const image = props;

  return (
    <div className="w-full sm:w-96 mr-5 drop-shadow-md">
      <img src={image} className="w-full h-44" />
    </div>
  );
};

export default BlogImage;

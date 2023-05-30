type BlogImageProps = {
  image: string;
};

const BlogImage: React.FC<BlogImageProps> = ({ image }) => {
  return (
    <div className="w-full sm:w-96 mr-5 drop-shadow-md">
      <img src={image} className="w-full h-44" />
    </div>
  );
};

export default BlogImage;

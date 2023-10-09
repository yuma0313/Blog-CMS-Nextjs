type BlogCategoryProps = {
  category: string;
};

type Props = {
  bgColor: "bg-gray-500" | "bg-blue-500" | "bg-red-500" | "bg-green-500";
};

const BlogCategory: React.FC<BlogCategoryProps & Props> = ({
  category,
  bgColor,
}) => {
  switch (bgColor) {
    case "bg-gray-500":
      bgColor = "bg-gray-500";
      break;
    case "bg-blue-500":
      bgColor = "bg-blue-500";
      break;
    case "bg-red-500":
      bgColor = "bg-red-500";
      break;
    case "bg-green-500":
      bgColor = "bg-green-500";
      break;
    default:
      bgColor = "bg-gray-500";
      break;
  }

  return (
    <p
      className={`${bgColor} my-2 ml-auto mr-2 float-left rounded-2xl text-white py-1 px-4`}
    >
      {category}
    </p>
  );
};

export default BlogCategory;

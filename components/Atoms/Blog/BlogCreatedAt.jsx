import Moment from "react-moment";

const BlogCreatedAt = ({ props }) => {
  const createdAt = props;

  return (
    <div className="flex justify-end mx-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <Moment format="YYYY/MM/DD">{createdAt}</Moment>
    </div>
  );
};

export default BlogCreatedAt;

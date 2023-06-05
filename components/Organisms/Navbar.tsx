import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <Link href="/">
          <a className="text-white font-bold flex-auto cursor-pointer">
            YumaTechBlog
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

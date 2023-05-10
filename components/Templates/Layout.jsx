import Head from "next/head";
import Navbar from "../Navbar";

const Layout = ({ children, title = "Default title" }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer className="w-full h-5 flex justify-center items-center text-gray-500 text-sm pb-5">
        @YumaTechBlog
      </footer>
    </div>
  );
};

export default Layout;

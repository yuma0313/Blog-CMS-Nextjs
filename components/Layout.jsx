import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, title = "Default title" }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer className="fixed bottom-0 left-0 w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @BlogApp
      </footer>
    </div>
  );
};

export default Layout;

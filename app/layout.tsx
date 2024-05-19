import "../app/globals.css";
import "../styles/Home.module.css";
import "tailwindcss/tailwind.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./_components/Header";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YumaTechBlog",
};

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} min-h-screen bg-gray-100`}>
        <Header />
        <main>{children}</main>
        <footer className="w-full h-5 flex justify-center items-center text-gray-500 text-sm pb-5 absolute bottom-0 left-0 right-0">
          @YumaTechBlog
        </footer>
      </body>
    </html>
  );
}

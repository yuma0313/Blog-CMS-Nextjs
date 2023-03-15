import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllBlogIds, getBlogData } from "../../lib/blogs";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

export default function Blog({ blog }) {
  const router = useRouter();

  if (router.isFallback || !blog) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={blog.title}>
      <div className="my-5 flex justify-around mx-5 min-h-[calc(100vh_-_100px)]">
        <div className="p-5 my-3 bg-gray-300 w-3/5 markdown">
          <p className="flex justify-center text-3xl font-bold mx-auto py-5">
            {blog.title}
          </p>
          <p className="mb-3 flex justify-end">{blog.publishedAt}</p>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
          ></div>
        </div>
        <div className="p-3 my-3 bg-gray-300 w-72 ">
          <div className="bg-gray-500">検索</div>
          <div className="mt-3 bg-gray-500">プロフィール</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllBlogIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = await getBlogData(params.id);

  // ---- 追加する処理 ここから ----
  const $ = cheerio.load(blog.body); // blog.bodyはmicroCMSから返されるリッチエディタ部
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  blog.body = $.html();

  return {
    props: {
      blog,
    },
    revalidate: 3,
  };
}

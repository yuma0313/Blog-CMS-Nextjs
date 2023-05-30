import { client } from "./client";

export async function getAllBlogData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/blogs/`)
  );
  const blogs = await res.json();
  const filteredBlogs = blogs.sort(
    (a, b) =>
      //getTime()メソッドでDateオブジェクトをミリ秒に変換し減算
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return filteredBlogs;
}

export async function getAllBlogIds() {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return paths;
}

export async function getBlogData(id) {
  const data = await client.get({ endpoint: "blog", contentId: id });

  return data;
}

import { format } from "date-fns";
import { getBlogData } from "../../../lib/blogs";
import Profile from "../../_components/Profile";
import ReactMarkdown from "react-markdown";
import parser from "rich-editor-to-markdown-parser";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { MdAccessTime } from "react-icons/md";

export default async function BlogDetailPage({ params }) {
  const blog = await getBlogData(params.id);
  const body = parser(blog.body);

  return (
    <div className="my-5 flex flex-col sm:flex-row justify-center mx-5 min-h-[calc(100vh_-_100px)]">
      <div className="p-3 my-3 bg-gray-50 w-full sm:w-3/5 mr-5 markdown">
        <div className="flex justify-center text-3xl mx-auto py-2 font-bold">
          {blog.title}
        </div>
        <div className="mb-3 flex justify-end">
          <MdAccessTime className="w-6 h-6" />
          <span className="text-black">
            {format(blog.createdAt, "yyyy/MM/dd")}
          </span>
        </div>
        <div>
          <ReactMarkdown
            components={{
              code: ({ node, ...props }) => (
                <SyntaxHighlighter {...props} style={vscDarkPlus}>
                  {props.children}
                </SyntaxHighlighter>
              ),
            }}
          >
            {body}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-full sm:w-72 mt-3 sm:ml-6">
        <Profile />
      </div>
    </div>
  );
}

import React from "react";
import BlogCategory from "./BlogCategory";

//コンポーネントの出力方法を設定
export default {
  title: "Atoms/BlogCategory",
  component: BlogCategory,
  argTypes: {
    bgColor: {
      control: { type: "select" },
      options: ["bg-gray-500", "bg-blue-500", "bg-red-500", "bg-green-500"],
    },
  },
};

//コンポーネントの引数を設定
const Template = (args) => <BlogCategory {...args} />;

//テンプレートを作成
export const Default = Template.bind({});
Default.args = {
  category: "TypeScript",
  bgColor: "bg-blue-500",
};

import React from "react";
import BlogTitle from "./BlogTitle";

//コンポーネントの出力方法を設定
export default {
  title: "Atoms/BlogTitle",
  component: BlogTitle,
};

//コンポーネントの引数を設定
const Template = (args) => <BlogTitle {...args} />;

//テンプレートを作成
export const Default = Template.bind({});
Default.args = {
  title: "Storybook使ってみた!",
};

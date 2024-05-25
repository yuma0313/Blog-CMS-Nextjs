"use client";

import { useRouter } from "next/navigation";
import { supabaseClientComponentClient } from "../../../lib/supabase/supabaseClient";

type Props = {
  userId: string;
};

export default function CreateTodoForm({ userId }: Props) {
  const router = useRouter();

  const addTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルトの送信を防ぐ
    const formData = new FormData(event.currentTarget); // 現在のフォームから FormData を取得
    const title = formData.get("title");
    const { data, error } = await supabaseClientComponentClient
      .from("todos")
      .insert([
        {
          title: title,
          deadline: formData.get("deadline"),
          user_id: userId,
        },
      ])
      .select();
    router.refresh();
  };

  return (
    <form onSubmit={addTodo} className="flex items-center justify-center gap-4">
      <input
        type="text"
        name="title"
        className="border-2 border-border rounded-md p-2"
      />
      <input
        type="date"
        name="deadline"
        className="border-2 border-border rounded-md p-2"
      />
      <button type="submit" className="border-2 border-border rounded-md p-2">
        Add
      </button>
    </form>
  );
}

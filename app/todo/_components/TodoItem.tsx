"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function TodoItem({ todo, userId }) {
  const router = useRouter();

  const supabaseClientComponentClient = createClientComponentClient();
  const updateIsCompleted = async () => {
    await supabaseClientComponentClient
      .from("todos")
      .update({ completed: !todo.completed })
      .eq("id", todo.id)
      .eq("user_id", userId);
    router.refresh();
  };

  return (
    <li key={todo.id} className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={updateIsCompleted}
      />
      <span>{todo.title}</span>
    </li>
  );
}

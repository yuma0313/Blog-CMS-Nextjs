import { format } from "date-fns";
import { supabaseServerComponentClient } from "../../lib/supabase/supabaseServer";
import TodoItem from "../todo/_components/TodoItem";

export default async function TodayTodoList() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { data: user } = await supabaseServerComponentClient.auth.getUser();
  const userId = user.user?.id;
  const { data: todos } = await supabaseServerComponentClient
    .from("todos")
    .select()
    .eq("user_id", userId)
    .eq("deadline", format(new Date(), "yyyy-MM-dd"));

  return (
    <div className="flex flex-col items-start justify-start gap-y-2 bg-gray-50 p-4 rounded-md">
      <h2 className="text-2xl font-bold">今日のTODO</h2>
      <ul className="flex flex-col gap-2">
        {todos?.length === 0 ? (
          <p>なし</p>
        ) : (
          todos?.map((todo) => (
            <TodoItem todo={todo} userId={userId!} key={todo.id} />
          ))
        )}
      </ul>
    </div>
  );
}

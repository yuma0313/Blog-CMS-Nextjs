import { supabaseServerComponentClient } from "../../lib/supabase/supabaseServer";
import CreateTodoForm from "./_components/CreateTodoForm";
import TodoItem from "./_components/TodoItem";

export default async function TodoPage() {
  const { data: user } = await supabaseServerComponentClient.auth.getUser();
  const userId = user.user?.id;
  const { data: todos } = await supabaseServerComponentClient
    .from("todos")
    .select()
    .eq("user_id", userId);

  await new Promise((resolve) => setTimeout(resolve, 0));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <CreateTodoForm userId={userId!} />
      <ul className="flex flex-col gap-2 mt-4 items-start">
        {todos?.map((todo) => (
          <TodoItem todo={todo} userId={userId!} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

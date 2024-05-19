"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabaseClientComponentClient } from "../../../lib/supabase/supabaseClient";

export default function Auth() {
  // const { loginUser } = useStore();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLogin) {
      const { error } =
        await supabaseClientComponentClient.auth.signInWithPassword({
          email,
          password,
        });
      setEmail("");
      setPassword("");
      if (error) {
        alert(error.message);
      } else {
        router.push("/todo");
      }
    } else {
      const { error } = await supabaseClientComponentClient.auth.signUp({
        email,
        password,
      });
      setEmail("");
      setPassword("");
      if (error) {
        alert(error.message);
      }
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="my-6 px-4 py-2 cursor-pointer text-indigo-600 font-bold text-xl">
        {isLogin ? "Login" : "Sign up"}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            className="w-96 my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            required
            className="w-96 my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="my-6 flex justify-center text-sm">
          <button
            type="submit"
            className=" rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
          >
            {isLogin ? "Login" : "Sign up"}
          </button>
        </div>
      </form>
      <p
        onClick={() => setIsLogin(!isLogin)}
        className="cursor-pointer font-medium hover:text-indigo-500"
      >
        change mode ?
      </p>
    </div>
  );
}

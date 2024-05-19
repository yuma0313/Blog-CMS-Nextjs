"use client";

import Link from "next/link";
import { supabaseClientComponentClient } from "../../lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const onClickSignOut = async () => {
    await supabaseClientComponentClient.auth.signOut();
    router.push("/login");
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabaseClientComponentClient.auth.getSession();
      if (data.session === null) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [pathname]);

  return (
    <div className="flex justify-between bg-gray-800">
      <div className="flex items-center">
        <div className="h-16 px-8 flex items-center">
          <Link
            href="/"
            className="text-white font-bold flex-auto cursor-pointer"
          >
            APP
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/blog" className="text-white px-8 cursor-pointer">
            Blog
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/todo" className="text-white px-8 cursor-pointer">
            Todo
          </Link>
        </div>
      </div>
      <div
        className="flex items-center text-white px-8 cursor-pointer"
        onClick={onClickSignOut}
      >
        Sign out
      </div>
    </div>
  );
};

export default Header;

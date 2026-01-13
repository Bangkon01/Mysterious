"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Protected({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isLogin")) {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}

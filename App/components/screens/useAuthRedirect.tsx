import { useAppSelector } from "@/App/hooks/useAppSelector";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuthRedirect = () => {
  const { key } = useAppSelector((state) => state.user);
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : "/";

  useEffect(() => {
    if (key) push(redirect);
  }, [key, push, redirect]);
};

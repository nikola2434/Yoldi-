import { useRouter } from "next/router";
import { FC } from "react";
import style from "./Footer.module.scss";
import { LinkLogin } from "./LinkLogin/LinkLogin";
import { LinkRegister } from "./LinkRegister/LinkRegister";

export const Footer: FC = () => {
  const { asPath } = useRouter();
  const isLogin = asPath === "login";
  return (
    <div className={style.footer}>
      {isLogin ? <LinkLogin /> : <LinkRegister />}
    </div>
  );
};

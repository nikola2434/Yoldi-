import Link from "next/link";
import { FC } from "react";
import style from "./LinkLogin.module.scss";

export const LinkLogin: FC = () => {
  return (
    <div className={style.link_login}>
      <span>Уже есть аккаунт?</span>
      <Link href="register" className={style.link}>
        {" "}
        Войти
      </Link>
    </div>
  );
};

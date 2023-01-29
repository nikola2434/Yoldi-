import Link from "next/link";
import { FC } from "react";
import style from "./ButtonHeader.module.scss";

export const ButtonHeader: FC = () => {
  return (
    <Link href="login">
      <button className={style.button}>Войти</button>
    </Link>
  );
};

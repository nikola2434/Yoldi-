import Link from "next/link";
import { FC } from "react";
import { Logo } from "../../UI/Logo/Logo";
import { ButtonHeader } from "./ButtonHeader/ButtonHeader";
import style from "./Header.module.scss";

export const Header: FC = () => {
  const user = null;
  return (
    <div className={style.header}>
      <div className={style.title}>
        <Logo />
        <div>Разрабатываем и запускаем сложные веб проекты</div>
      </div>
      {user ? (
        <Link href={""}>
          <div>account</div>
        </Link>
      ) : (
        <ButtonHeader />
      )}
    </div>
  );
};

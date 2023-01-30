import { useAppSelector } from "@/App/hooks/useAppSelector";
import Link from "next/link";
import { FC } from "react";
import { Logo } from "../../UI/Logo/Logo";
import { ButtonHeader } from "./ButtonHeader/ButtonHeader";
import style from "./Header.module.scss";

export const Header: FC = () => {
  const { key } = useAppSelector((state) => state.user);
  return (
    <div className={style.header}>
      <div className={style.title}>
        <Logo />
        <div>Разрабатываем и запускаем сложные веб проекты</div>
      </div>
      {key ? (
        <Link href={""}>
          <div>account</div>
        </Link>
      ) : (
        <ButtonHeader />
      )}
    </div>
  );
};

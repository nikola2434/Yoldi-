import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../../assets/images/logo-wrapper.jpg";
import style from "./Logo.module.scss";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="yoldi"
        draggable={false}
        className={style.logo}
        width={80}
        height={50}
      />
    </Link>
  );
};

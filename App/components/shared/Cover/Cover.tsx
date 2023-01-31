import { IImage } from "@/App/shared/interfaces/user.interface";
import NextImage from "next/image";
import { FC } from "react";
import style from "./Cover.module.scss";

interface ICoverProps {
  cover: IImage | null;
  isProfile?: boolean;
}

export const Cover: FC<ICoverProps> = ({ cover, isProfile = false }) => {
  return (
    <div className={style.cover}>
      {cover ? <img src={cover.url} alt="" draggable={false} /> : <div />}
      {isProfile && <input />}
    </div>
  );
};

import { IImage } from "@/App/shared/interfaces/user.interface";
import Image from "next/image";
import { FC } from "react";
import style from "./UserAvatar.module.scss";

interface IUserAvatarProps {
  avatar: IImage | null;
  name: string;
  isProfile?: boolean;
}

export const UserAvatar: FC<IUserAvatarProps> = ({
  avatar,
  name,
  isProfile = false,
}) => {
  return (
    <div className={style.avatar}>
      {avatar ? (
        <Image
          src={avatar.url}
          alt={name}
          width={100}
          height={100}
          draggable={false}
          priority
          className={style.image}
        />
      ) : (
        <div >
          {name.slice(0, 1)}
        </div>
      )}
      {/* {isProfile && <input />} */}
    </div>
  );
};

import { IconButton } from "@/App/components/UI/IconButton/IconButton";
import { PencilIcon } from "@/App/components/UI/Icons/Icons";
import { IUser } from "@/App/shared/interfaces/user.interface";
import { FC } from "react";
import style from "./HeadingUser.module.scss";

interface IHeadingUserProps {
  user: IUser;
  isProfile?: boolean;
}

export const HeadingUser: FC<IHeadingUserProps> = ({
  user,
  isProfile = false,
}) => {
  return (
    <div className={style.heading_user}>
      <div className={style.contacts}>
        <div className={style.name}>{user.name}</div>
        <div className={style.email}>{user.email}</div>
      </div>
      {isProfile && (
        <IconButton icon={<PencilIcon />}>Редактировать</IconButton>
      )}
    </div>
  );
};

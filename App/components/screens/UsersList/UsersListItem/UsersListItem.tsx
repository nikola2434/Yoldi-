import { UserImage } from "@/App/components/shared/UserImage/UserImage";
import { getUserUrl } from "@/App/configs/url.config";
import { IUser } from "@/App/shared/interfaces/user.interface";
import Link from "next/link";
import { FC } from "react";
import style from "./UserListItem.module.scss";

export const UsersListItem: FC<{ user: IUser }> = ({ user }) => {
  return (
    <Link href={getUserUrl(user.slug)} className={style.item}>
      <UserImage image={user.image} name={user.name} />
      <div className={style.contacts}>
        <div className={style.name}>{user.name}</div>
        <div className={style.email}>{user.email}</div>
      </div>
    </Link>
  );
};

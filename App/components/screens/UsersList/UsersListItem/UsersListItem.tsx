import { UserImage } from "@/App/components/shared/UserImage/UserImage";
import { getProfileUrl, getUserUrl } from "@/App/configs/url.config";
import { useAppSelector } from "@/App/hooks/useAppSelector";
import { IUser } from "@/App/shared/interfaces/user.interface";
import Link from "next/link";

import { FC } from "react";
import style from "./UserListItem.module.scss";

export const UsersListItem: FC<{ userProps: IUser }> = ({ userProps }) => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <Link
      href={
        user?.email === userProps.email
          ? getProfileUrl()
          : getUserUrl(userProps.slug)
      }
      className={style.item}
    >
      <UserImage image={userProps.image} name={userProps.name} />
      <div className={style.contacts}>
        <div className={style.name}>{userProps.name}</div>
        <div className={style.email}>{userProps.email}</div>
      </div>
    </Link>
  );
};

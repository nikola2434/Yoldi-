import { IUser } from "@/App/shared/interfaces/user.interface";
import { FC, use } from "react";
import { Meta } from "../../Providers/Meta/Meta";
import { Cover } from "../../shared/Cover/Cover";
import { UserAvatar } from "../../shared/UserAvatar/UserAvatar";
import { HeadingUser } from "./HeadingUser/HeadingUser";
import style from "./User.module.scss";

export const User: FC<{ user: IUser }> = ({ user }) => {
  return (
    <Meta title={user.name}>
      <div className={style.screen}>
        <Cover cover={user.cover} />
        <div className={style.avatar}>
          <UserAvatar avatar={user.image} name={user.name} />
        </div>
        <div className={style.body}>
          <HeadingUser user={user} />
          {user.description && <span>{user.description}</span>}
        </div>
      </div>
    </Meta>
  );
};

import { UserImage } from "@/App/components/shared/UserImage/UserImage";
import { getProfileUrl } from "@/App/configs/url.config";
import useSwr from "swr";
import Link from "next/link";
import { FC } from "react";
import style from "./LinkProfile.module.scss";
import { profileApi } from "@/App/services/UserProfile/profile.api";
import { IUser } from "@/App/shared/interfaces/user.interface";

export const LinkProfile: FC = () => {
  const { data } = useSwr<IUser>("profile");

  return (
    <Link href={getProfileUrl()} className={style.link}>
      <div className={style.name}>{data?.name}</div>
      <UserImage image={data?.image || null} name={data?.name || ""} />
    </Link>
  );
};

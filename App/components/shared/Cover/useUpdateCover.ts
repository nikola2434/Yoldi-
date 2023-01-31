import { fileApi } from "@/App/services/fileApi/file.api";
import { profileApi } from "@/App/services/UserProfile/profile.api";
import { IRequestUpdateProfile } from "@/App/services/UserProfile/profileApit.interface";
import { IUser } from "@/App/shared/interfaces/user.interface";
import { getLocalStorage } from "@/App/utils/local-storage.utils";
import { ChangeEvent } from "react";
import { useSWRConfig } from "swr";

export const useUpdateCover = (user: IUser) => {
  const { mutate } = useSWRConfig();
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file?.length) return;

    const formData = new FormData();
    formData.append("file", file[0]);
    const image = await mutate("file", fileApi.uploadFile(formData));
    if (!image) return;
    const body: IRequestUpdateProfile = {
      name: user.name,
      coverId: image.id,
      description: user.description || "",
      password: getLocalStorage("password"),
      slug: user.slug,
      imageId: user.image?.id || null,
    };
    mutate("profile", profileApi.updateProfile(body));
  };

  const removeCover = async () => {
    const body: IRequestUpdateProfile = {
      name: user.name,
      coverId: null,
      description: user.description || "",
      password: getLocalStorage("password"),
      slug: user.slug,
      imageId: user.image?.id || null,
    };
    await mutate("profile", profileApi.updateProfile(body));
  };

  return { onChange, removeCover };
};

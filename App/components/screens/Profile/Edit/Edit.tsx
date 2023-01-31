import { FieldEdit } from "@/App/components/shared/Edit/FieldEdit/FieldEdit";
import { FieldLinkEdit } from "@/App/components/shared/Edit/FieldLinkEdit/FieldLinkEdit";
import { FieldTextareaEdit } from "@/App/components/shared/Edit/FieldTextareaEdit/FieldTextareaEdit";
import ButtonForm from "@/App/components/UI/ButtonForm/ButtonForm";
import { Heading } from "@/App/components/UI/Heading/Heading";
import { IUser } from "@/App/shared/interfaces/user.interface";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./Edit.module.scss";
import { useEdit } from "./useEdit";

export interface IEditProfile {
  name: string;
  description: string;
  slug: string;
}

interface IEditProps {
  user: IUser;
  setIsActiveModal: (prev:boolean) => void
}

export const Edit: FC<IEditProps> = ({ user, setIsActiveModal }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEditProfile>();

  const { onSubmit } = useEdit(setValue, setIsActiveModal, user);

  return (
    <div className={style.edit}>
      <Heading>Редактировать профиль</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.name}>
          <FieldEdit
            placeholder="Имя"
            error={errors.name}
            {...register("name", {
              required: "Это поле должно быть заполнено",
            })}
          />
        </div>
        <div className={style.slug}>
          <FieldLinkEdit
            placeholder="Адрес профиля"
            error={errors.slug}
            {...register("slug", {
              required: "Это поле должно быть заполнено",
            })}
          />
        </div>
        <div className={style.description}>
          <FieldTextareaEdit
            placeholder="Описание"
            error={errors.description}
            {...register("description", {
              required: "Это поле должно быть заполнено",
            })}
          />
        </div>
        <div className={style.buttons}>
          <ButtonForm look="light">Отмена</ButtonForm>
          <ButtonForm look="dark">Сохранить</ButtonForm>
        </div>
      </form>
    </div>
  );
};

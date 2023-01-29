import { FC } from "react";
import style from "./FieldsRegister.module.scss";
import { useForm } from "react-hook-form";
import { IRegister } from "@/App/shared/interfaces/auth.interface";
import { SubmitHandler } from "react-hook-form/dist/types";
import { AuthField } from "@/App/components/shared/AuthField/AuthField";
import {
  HumanIcon,
  LetterIcon,
  LockIcon,
} from "@/App/components/UI/Icons/Icons";

import { Button } from "@/App/components/UI/Button/Button";

export const FieldsRegister: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegister>({ mode: "onChange" });
  const onSubmit: SubmitHandler<IRegister> = (data) => {
    alert(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <AuthField
        icon={<HumanIcon />}
        error={errors.name}
        placeholder="Имя"
        {...register("name", { required: true })}
      />
      <AuthField
        icon={<LetterIcon />}
        error={errors.email}
        placeholder="E-mail"
        {...register("email", {
          required: true,
          pattern: { value: /.+@.+\..+/i, message: "Введите правильный email" },
        })}
      />
      <AuthField
        icon={<LockIcon />}
        error={errors.password}
        type={"password"}
        placeholder="Пароль"
        {...register("password", {
          required: true,
          minLength: {
            value: 5,
            message: "Пароль должен быть больше 5 символов",
          },
        })}
      />
      <Button disabled={!isValid}>Создать аккаунт</Button>
    </form>
  );
};

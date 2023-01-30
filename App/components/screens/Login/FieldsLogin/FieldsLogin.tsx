import { AuthField } from "@/App/components/shared/AuthField/AuthField";
import { Button } from "@/App/components/UI/Button/Button";
import { LetterIcon, LockIcon } from "@/App/components/UI/Icons/Icons";
import { useAppDispatch } from "@/App/hooks/useAppDispatch";
import { useAppSelector } from "@/App/hooks/useAppSelector";
import { ILogin } from "@/App/shared/interfaces/auth.interface";
import { getRegexEmail } from "@/App/shared/regex/regex";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import style from "./FieldsLogin.module.scss";

export const FieldsLogin: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<ILogin>({ mode: "onChange" });

  const { isLoading } = useAppSelector((state) => state.user);
  const { login } = useAppDispatch();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    login({ data, setError });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <AuthField
        icon={<LetterIcon />}
        placeholder="E-mail"
        error={errors.email}
        {...register("email", {
          required: true,
          pattern: {
            value: getRegexEmail(),
            message: "Введите правильный email",
          },
        })}
      />

      <AuthField
        icon={<LockIcon />}
        placeholder="Пароль"
        error={errors.password}
        type={"password"}
        {...register("password", {
          required: true,
          minLength: {
            value: 5,
            message: "Пароль должен быть больше 5 символов",
          },
        })}
      />
      <Button disabled={!isValid}>Войти</Button>
    </form>
  );
};

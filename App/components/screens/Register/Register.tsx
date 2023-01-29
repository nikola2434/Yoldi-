import { FC } from "react";
import { Heading } from "../../UI/Heading/Heading";
import { FieldsRegister } from "./FieldsRegister/FieldsRegister";
import style from "./Register.module.scss";

export const Register: FC = () => {
  return (
    <div className={style.register_screen}>
      <div className={style.register}>
        <Heading>
          Регистрация <br /> в Yoldi Agency
        </Heading>

        <FieldsRegister />
      </div>
    </div>
  );
};

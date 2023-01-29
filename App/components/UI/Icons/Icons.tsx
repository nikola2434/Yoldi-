import { FC } from "react";
import { ReactComponent as Human } from "../../../assets/icons/human.svg";
import { ReactComponent as Letter } from "../../../assets/icons/letter.svg";
import { ReactComponent as Lock } from "../../../assets/icons/lock.svg";

export const HumanIcon: FC = () => <Human />;
export const LetterIcon: FC = () => {
  return <Letter />;
};
export const LockIcon: FC = () => {
  return <Lock />;
};

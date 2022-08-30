import { FC } from "react";
import { ButtonStyled } from "../styles";

export const Button: FC<{
  title: string;
  isDisabled: boolean;
  onClick: VoidFunction;
}> = ({ title, isDisabled, onClick }) => {
  return (
    <ButtonStyled disabled={isDisabled} onClick={onClick}>
      {title} <span />
    </ButtonStyled>
  );
};

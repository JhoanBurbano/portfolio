import { FC } from "react";
import { ViewItemStyled } from "../styles";

export const ViewItem: FC<{ logo: string; color: string }> = ({
  logo,
  color,
}) => {
  return (
    <ViewItemStyled color={color}>
      <div className="item">
        <a href="#d" target="_blank" rel="noreferrer" >
          {logo}
        </a>
        <div></div>
      </div>
    </ViewItemStyled>
  );
};

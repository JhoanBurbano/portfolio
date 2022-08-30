import { FC, ReactElement } from "react";
import Animate from "@charlesvien/react-animatecss";
import { RubberTextTag } from "../styles";
import { Letter } from "./Letter.atom";

export const RubberText: FC<{ word: string }> = ({ word }) => {
  function splitedText(): ReactElement {
    return (
      <RubberTextTag>
        {word.split("").map((letter: string, i: number) => {
          if (letter === " ") {
            return <span key={i}>&nbsp;&nbsp;&nbsp;</span>;
          }
          return (
            <Animate
              key={i + 300}
              visible={true}
              onMount={true}
              animationIn={"zoomIn"}
              inDelay={i * 50}
            >
              <Animate
                key={i}
                visible={true}
                onMount={true}
                animationIn={"rubberBand"}
                inDelay={i * 50}
              >
                <Letter letter={letter} index={i} />
              </Animate>
            </Animate>
          );
        })}
      </RubberTextTag>
    );
  }
  return <>{splitedText()}</>;
};

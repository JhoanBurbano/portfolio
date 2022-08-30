import Animate from "@charlesvien/react-animatecss";
import React, { FC } from "react";
import { ListsStyled } from "../styles";

export const Lists: FC<{documents: String[], selectOption: (id: number) => void}> = ({documents, selectOption}) => {
    return (
        <ListsStyled>
                {
                    documents.map((document, i) => {
                        return (
                            <Animate className="option" animationIn={"slideInDown"} key={i} inDelay={i*200}>
                                <span onClick={()=>selectOption(i)}>    
                                {document}
                                </span>
                                </Animate>
                        )
                    })
                }
        </ListsStyled>
    )
}
import { FC, useState } from "react";

export const Letter: FC<{letter: string, index: number}> = ({letter, index}) => {
    const [loop, setLoop] = useState<boolean>(false)
    function changeLoop (): void {
        setLoop(l => !loop)
    }
    return (
        <span
        onMouseOver={changeLoop}
        onMouseLeave={()=>{ setTimeout(changeLoop, 50)}}
        >
            {letter}
        </span>
    )
}
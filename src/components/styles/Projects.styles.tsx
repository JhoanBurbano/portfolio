import styled from "styled-components";
import { ani, colors, setBigLetters, tags } from ".";

export const ProjectsStyled = styled.section`
font-size: .9rem;
overflow-x: hidden;
color: ${({theme})=>theme.color};
background: ${({theme})=>theme.background};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
position: relative;
padding: 0 2rem;
& .top {
    display: flex;
    z-index: 1;
}
${setBigLetters("Portfolio")};
&::after {
	color: ${({theme})=>theme.bigLetter};
}
& .txt {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    height: 10%;
    align-items: center;
    z-index: 1;
    & p {
        width: 40rem;
        position: relative;
    &::after{
        ${tags('up', '<p>')}
        color: ${({theme})=>theme.italic};
        top: -30%;
        left: -3%;
    }
    &::before{
        ${tags('down', '</p>')}
        color: ${({theme})=>theme.italic};
        bottom: -40%;
        left: -3%;
    }
    }
    & button {
        width: 15rem;
    }
}
& .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 65%;
    background: ${colors.gray_d};
    padding: 3rem ;
    position: relative;
    border-radius: .5rem;
    overflow: hidden;
    &::after{
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, black, transparent);
        position: absolute;
        top:0;
        transition: transform .5s linear 1s;
    }
    &:hover::after {
        transform: translateY(100%);
    }
    & .projectTable {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: ${Array(2).fill("50%").join(' ')};
        grid-template-rows: ${Array(3).fill("33.33%").join(' ')};
        overflow: hidden;
        border-radius: .5rem;
    }
}
`;
import styled from "styled-components";
import { setBigLetters, setTags} from "."

export const About = styled.section`
font-size: 1rem;
overflow-x: hidden;
color: ${({theme})=>theme.color};
background: ${({theme})=>theme.background};
width: 100%;
height: 100%;
display: flex;
align-items:center;
justify-content: space-around;
position: relative;
padding: 0 2rem;
${setBigLetters('ABOUT')}
&::after {
	color: ${({theme})=>theme.bigLetter};
}
& > *{
	width: 45%;
	height: 80%;
	
}
& .left{
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 40%;
& > h2{
	z-index: 1;
	position: relative;
	}
	& p {
		margin-left: 1rem;
		width: 100%;
		position: relative;
		& > *{
			text-decoration: none;
			color: ${({theme})=>theme.primary}
		}
		${setTags('p')}
	}
	& > *{
	margin-bottom: 2rem;

	}
}
& .right{
	width: 50%;height: 50rem;
	display:flex;
	& > * {
		z-index: 3
	}
}

`;
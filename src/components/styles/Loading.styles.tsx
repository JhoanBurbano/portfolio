import styled from "styled-components";

export const Loading = styled.main`
	width: 100%;
	height: 100%;
	color: ${({theme})=>theme.color};
	background: ${({theme})=>theme.background};
	display: none;
	align-items: center;
	justify-content: center;
	position:absolute;
	top:0;
	left:0;
	z-index: 7;
	&.view{
		display: flex;
	align-items: center;
	justify-content: center;
	}
`
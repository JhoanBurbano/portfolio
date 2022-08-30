import styled from "styled-components";
import { ani, colors, tags } from ".";

export const Home = styled.section`
	color: ${({theme})=>theme.color};
	background: ${({theme})=>theme.background};
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
	& .scroll {
		width: 7%;
		color: ${colors.white};
		display: flex;
		justify-content: center;
		align-items: end;
		padding: 1rem 0;
		& p {
			text-orientation: mixed;
			writing-mode: vertical-rl;
			font-size: .9rem;
			animation: ${ani?.scroll} .5s ease-in-out infinite both alternate;
			color: ${({theme})=>theme.color};
		}
	}
	& .landing {
		width: 86%;
		height: 100%;
		color: ${({theme})=>theme.landing};
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		& > * {
			margin-bottom: 2rem;
		}
		& h2 {
			font-family: 'Manrope', sans-serif;
			font-size: 6rem;
			line-height: 85%;
			letter-spacing: -.15rem;
			position:relative;
			&::after{
				${tags('up', '<h2>')}
				color: ${({theme})=>theme.italic};
			}
			&::before{
				${tags('down', '</h2>', 'right')}
				color: ${({theme})=>theme.italic};
			}
			& > span {
				display: inline-block;
				cursor: default;
				animation: ${ani?.fadeIn} .4s linear both;
				&:nth-child(1){
					animation-delay: 0.1s;
				}
				&:nth-child(2){
					animation-delay: 0.2s;
				}
				&:nth-child(3){
					animation-delay: 0.3s;
				}
				&:nth-child(5){
					animation-delay: 0.4s;
				}
				&:nth-child(6){
					animation-delay: 0.5s;
				}
				&:nth-child(7){
					animation-delay: 0.6s;
				}
				&:nth-child(8){
					animation-delay: 0.7s;
				}
				&:nth-child(10){
					animation-delay: 0.8s;
				}
				&:nth-child(11){
					animation-delay: 0.9s;
				}
				&:nth-child(12){
					animation-delay: 1s;
				}
				&:nth-child(13){
					animation-delay: 1.1s;
				}
				&:nth-child(14){
					animation-delay: 1.2s;
				}
				&:nth-child(16){
					animation-delay: 1.3s;
				}
				&:nth-child(17){
					animation-delay: 1.4s;
				}
				&:nth-child(18){
					animation-delay: 1.5s;
				}
				&:nth-child(19){
					animation-delay: 1.6s;
				}
				&:nth-child(20){
					animation-delay: 1.7s;
				}
				&:nth-child(21){
					animation-delay: 1.8s;
				}
				&:nth-child(22){
					animation-delay: 1.9s;
				}
				&.load{
					animation: ${ani?.fadeIn} .4s linear both;

				}
				&:hover {
					animation: ${ani?.rubberBand};
					animation-duration: 1s;
					animation-fill-mode: both;
					color: ${({theme})=>theme.primary};
				}
				&#letter {
					animation: none;
					color: ${({theme})=>theme.letter};
					text-shadow: -.5rem -.0rem 0 ${({theme})=>theme.primary};
					animation: ${ani?.rotate} .4s linear both .5s;
				}
			}
		}
		& canvas {
			position: absolute;
			left: 0;
			z-index: -1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		& > p {
			letter-spacing: .45rem;
			font-size: 1.1rem;
			color: ${({theme})=>theme.links};
			animation: ${ani?.fadeUp} .3s linear both 1 .2s;
			position: relative;
			&::after{
				${tags('up', '<p>')}
				color: ${({theme})=>theme.italic};
				top:-50%;
			}
			&::before{
				${tags('down', '</p>')}
				color: ${({theme})=>theme.italic};
				bottom:-70%;
			}

		}
		& h3 {
			font-size: 1.5rem;
			letter-spacing: .5rem;
			display: flex;
			animation: ${ani?.fadeUp} .3s linear both 1 .3s;

			& b {
				color: ${({theme})=>theme.primary};
			}
			&::after{
				${tags('up', '<h3>')}
				color: ${({theme})=>theme.italic};
				left: -1.7rem;
			}
			&::before{
				${tags('down', '</h3>', 'right')}
				color: ${({theme})=>theme.italic};
				right: -15%;
			}
		}
		& > button {
		}
		& .sound {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			justify-content: space-evenly;
			width: 12%;
			padding: 1rem;
			margin: .5rem;
			& > *:nth-child(1) {
				color: ${({theme})=>theme.secondary};
			}
			background: ${colors.black + '1'};
			&.active {
				& > *:nth-child(1) {
					color: ${({theme})=>theme.primary};
				}
			}
			& button {
				opacity: 1;
				border: none;
				background: none;
				color: ${({theme})=>theme.secondary};
				cursor: pointer;
				&.active {
					color: ${({theme})=>theme.primary};
				}
			}
		}
	}
`;
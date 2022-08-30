import styled from "styled-components";
import { ani, tags } from ".";

export const Contact = styled.section`
font-size: .9rem;
overflow-x: hidden;
color: ${({theme})=>theme.color};
background: ${({theme})=>theme.background};
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
position: relative;
& > *{
	width: 50%;height:100%;
}
& .left{
	display:flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 3rem 2rem 0 3rem;
	& > h2{
		z-index: 1;
		position: relative;
		&::after {
			content: 'CONTACT';
			width: 90%;
			height: 300%;
			font-size: 20rem;
			position: absolute;
			top: -100%;
			right: -10%;
			z-index: -12;
			color: ${({theme})=>theme.bigLetter};
		}
	}
	& p{
		padding: 1rem;
		animation: ${ani?.opacity} .3s linear both .3s;
		position: relative;
		&::after{
			${tags('up', '<p>')}
			color: ${({theme})=>theme.italic};
			top: -5%;
			left: -3%;
		}
		&::before{
			${tags('down', '</p>')}
			color: ${({theme})=>theme.italic};
			bottom: -10%;
			left: -3%;
		}
	}
	& form{
		padding: 1rem;
		height: 60%;
		width: 100%;
		margin: 0 auto;
		position: relative;
		&::after{
			${tags('up', '<form>')}
			color: ${({theme})=>theme.italic};
			top: -3%;
			left: -3%;
		}
		&::before{
			${tags('down', '</form>')}
			color: ${({theme})=>theme.italic};
			bottom: -5%;
			left: -3%;
		}
		& > *{
			color: ${({theme})=>theme.links};
			transition: border .1s linear;
			animation: ${ani?.fadeUp} .4s linear both;
			&:nth-child(1){
				animation-delay: .1s;
			}
			&:nth-child(2){
				animation-delay: .2s;
			}
			&:nth-child(4){
				animation-delay: .3s;
			}
			&:nth-child(6){
				animation-delay: .4s;
			}
			&:focus{
				border-bottom: 2px solid ${({theme})=>theme.primary};
			}
			&[name="message"]:focus{
				border-bottom: 2px solid ${({theme})=>theme.primary};
			}
			&[name="message"].error{
				border-bottom: 2px solid ${({theme})=>theme.secondary};
			}
			&.error{
				border-bottom: 2px solid ${({theme})=>theme.secondary};
			}
			&.active{
				border-bottom: 2px solid ${({theme})=>theme.primary};
			}
			&[name="message"].active{
				border-bottom: 2px solid ${({theme})=>theme.primary};
			}
		}
		& > input{
			border: none;
			outline: none;
			background: ${({theme})=>theme.inputs};
			resize: none;
			margin: 0 0 .5rem 0;
			padding: 1rem;
			width: 48.8%;
			height: 15%;
			&[type="email"]{
				margin: 0 0 .5rem .5rem;
			}
			&[name="subject"]{
				width: 100%;
			}
		}
		& [name="message"]{
			border: none;
			outline: none;
			background: ${({theme})=>theme.inputs};
			resize: none;
			margin: 0 0 .5rem 0;
			padding: 1rem;
			width: 100%;
			height: 50%
			}
		& div {
			display: flex;
			justify-content: end;
		}
	}

}
& .right{
	width: 50%;height: 100%;
	color: ${({theme})=>theme.color};
	background: ${({theme})=>theme.primary}
	display: flex;
	position: relative;
	& span{
		animation: ${ani?.fadeUp} .3s linear both 1s;
		height: auto;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 150;
		padding: 2rem;
		margin: 2rem;
		background: ${({theme})=>theme.transparent};
		color: ${({theme})=>theme.text_i};
		text-align: center;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		& > .svg {
			font-size: 1.2rem;
			color: ${({theme})=>theme.secondary}
		}
	}
	& > * {
		height: 100%;
		z-index: 1;
	}
}
`

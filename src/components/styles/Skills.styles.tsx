import styled from "styled-components";
import { ani, colors, tags } from ".";

export const Skills = styled.section`
font-size: .9rem;
overflow: hidden;
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
		& > * {
			margin-bottom:3rem;
		}
		& > h2{
			z-index:1;
		position: relative;
		&::after {
			content: 'SKILLS';
			width: 60%;
			height: 300%;
			font-size: 20rem;
			position: absolute;
			top: -10%;
			right: -10%;
			z-index: -2;
			color: ${({theme})=>theme.bigLetter};
		}
			& > span{
				&:nth-child(1){
					&::before{
						content: '';
					}
				}
				&:nth-child(10){
					&::before{
						${tags('down', '</h2>')}
					color: ${({theme})=>theme.italic};
					bottom: -75%;
					left: -40%;
					}
				}
			}
		}
		& p {
			width: 90%;
			padding-left: 1rem;
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
			bottom: -8%;
			left: -3%;
		}
		}
		padding: 3rem 2rem 0 3rem;
	}
	& .right{
		padding: 3rem 2rem 0 3rem;
		z-index: 5;	
		& > *{
			margin-bottom: 2rem;
		}
		& ul{
			width: 100%;
			& li{
				display: flex;
				list-style: none;
				font-family: 'Manrope';
				animation: ${ani?.opacity} .3s linear both;
				& h3{
					width: 100%;
					margin-bottom:.5rem; 
					& > span{
					margin-top:.25rem;
					display: block;
					width: 100%;
					height: .3rem;
					background: ${colors.gray_d};
					position: relative;
					overflow: hidden;
					& > span{
						display: block;
						width: 40%;
						height: 100%;
						position: absolute;
						top:0;
						left:0;
						animation: ${ani?.bars.js} .5s linear both 1;
						
						&#Javascript{
							background: yellow;
							width: 90%;
							animation-delay:.1s;
						}
						&#ReactJS{
							color: ${({theme})=>theme.color};
							background: ${({theme})=>theme.primary};
							width: 80%;
							animation-delay:.2s;
						}
						&#AngularJS{
							color: ${({theme})=>theme.color};
							background: ${({theme})=>theme.secondary};
							width: 70%;
							animation-delay:.3s;
						}
						&#NodeJS{
							background: ${colors.green};
							width: 90%;
							animation-delay:.4s;
						}
						&#NextJS{
							background: ${colors.gray_l};
							width: 60%;
							animation-delay:.5s;
						}
						&#Redux{
							background: ${colors.purple};
							width: 80%;
							animation-delay:.6s;
						}
						&#MongoDB{
							background: ${colors.green};
							width: 80%;
							animation-delay:.7s;
						}
						&#PostgreSQL{
							background: ${colors.blue_d};
							width: 80%;
							animation-delay:.8s;
						}
					}
				}
				}
			}
		}
		& .notes{
			display: flex;
			justify-content: space-evenly;
			& .chart{
				width: 14rem;
				height: 14rem;
				padding: 1rem .5rem 0 1rem;
				background: ${({theme})=>theme.inputs};
				box-shadow: 0 0 1rem ${colors.black + '3'};
				color: ${({theme})=>theme.links};
				line-height:1.25;
				animation: ${ani?.fadeUp} 1s linear both;
				&:nth-child(1){
					animation-delay: .1s;
				}
				&:nth-child(2){
					animation-delay: .4s;
				}
				& h4{
					font-size: 1.4rem;
					line-height: 1;
					font-weight: bold;
					color: ${({theme})=>theme.color};
					margin-bottom: 1rem;
				}
				& b {
					font-size: .9rem;
				}
				& p {
					font-size: .7rem;
					margin-bottom: 1rem;
					&.description{
						font-size: .9rem;
						margin-bottom: none;
					}
				}
			}
		}
	}
`;
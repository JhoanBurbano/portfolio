import styled from "styled-components";
import { ani, colors } from ".";

export const Navbar = styled.nav`
	color: ${({theme})=>theme.color};
	background: ${({theme})=>theme.Navbar};
	width: 15vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	user-select: none;
	& .logo {
		/* height:30%; */
		position: relative;
		& img {
			width: 100%;
		}
		& span{
			width: 100%;
			height: 100%;
			display: inline-block;
			position: absolute;
			top:0;
			left:0;
			display: flex;
			align-items: center;
			justify-content: center;
			& > p{
				text-decoration: none;
				font-weight: bold;
				color: ${colors.black};
				opacity: 0;
				font-size: .9rem;
			}
			&:hover{
				background: ${({theme})=>theme.green_dt};
				> p{
					opacity: 1;
					animation: ${ani?.fade} .1s linear both;
				}
			}
		}
		& p.name {
			position: absolute;
			width: 100%;
			bottom: 0;
			padding: 0;
			background: ${colors.black_t};
			color: ${colors.white};
			text-align: center;
		}
	}
	& .menu {
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
		& > * {
			padding: 1rem 0;
			border: 1px solid;
			border-color: ${({theme})=>theme.navLink} transparent transparent transparent;
			text-align: center;
			text-decoration: none;
			color: ${({theme})=>theme.navLink};
			transition: color .1s linear;
			&:hover{
					color: ${({theme})=>theme.hover}
				}
		}
		& .redes {
			margin: 0 auto;
			width: 100%;
			display: flex;
			justify-content: center;
			& > * {
				font-size: 1.5rem;
				color: ${({theme})=>theme.navLink};
				margin: 0 .25rem;
			transition: color .1s linear;
				&:hover{
					color: ${({theme})=>theme.primary}
				}
			}
		}
		& .config {
			& button {
				background: transparent;
				border: none;
				color: ${({theme})=>theme.navLink};
				cursor: pointer;
				& > * {
					font-size: 1.5rem;
					color: ${({theme})=>theme.navLink};
					margin: 0 .25rem;
					&:hover{
						color: ${({theme})=>theme.hover};
					}
				}
				& > p {
					font-size: 1.5rem;
				}
			}
		}
	}
`;
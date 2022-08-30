import styled from "styled-components";
import { ani, colors, setTags, tags } from ".";

export const ButtonStyled = styled.button`
  padding: 1rem 3rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  animation: ${ani?.fadeUp} 0.3s linear both 1 0.4s;
  &:hover {
    color: ${colors.black};
  }
  &:hover span {
    animation: ${ani?.button} 0.2s linear both;
  }
  & > span {
    content: "";
    height: 100%;
    width: 0%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.primary};
    z-index: -1;
  }
`;

export const Button = styled.button`
  padding: 1rem 3rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  animation: ${ani?.fadeUp} 0.3s linear both 1 0.4s;
  &:hover {
    color: ${colors.black};
  }
  &:hover span {
    animation: ${ani?.button} 0.2s linear both;
  }
  & > span {
    content: "";
    height: 100%;
    width: 0%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.primary};
    z-index: -1;
  }
`;

export const Component = styled.div`
  width: 85vw;
  height: 100vh;
  position: relative;
`;

export const All = styled.div`
  display: flex;
  font-size: 1.02rem;
  & > * {
    transition: background 0.2s linear;
    & > * {
      transition: background 0.2s linear;
    }
  }
`;

export const RubberText = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: 4rem;
  line-height: 90%;
  letter-spacing: -0.15rem;
  & > span {
    animation: ${ani?.fadeIn} 0.4s linear both;
    display: inline-block;
    cursor: default;
    color: ${({ theme }) => theme.primary};
    position: relative;
    &:nth-child(1) {
      animation-delay: 0.1s;
      &::after {
        ${tags("up", "<h2>")}
        color: ${({ theme }) => theme.italic};
        top: -50%;
        left: -40%;
      }
      &::before {
        ${tags("down", "</h2>")}
        color: ${({ theme }) => theme.italic};
        left: -40%;
        bottom: -65%;
      }
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
    &:nth-child(6) {
      animation-delay: 0.6s;
    }
    &:nth-child(7) {
      animation-delay: 0.7s;
    }
    &:nth-child(8) {
      animation-delay: 0.8s;
    }
    &:nth-child(9) {
      animation-delay: 0.9s;
    }
    &:nth-child(10) {
      animation-delay: 1s;
    }
    &:nth-child(11) {
      animation-delay: 1.1s;
    }
    &:nth-child(12) {
      animation-delay: 1.2s;
    }
    &:nth-child(13) {
      animation-delay: 1.3s;
    }
    &:nth-child(14) {
      animation-delay: 1.4s;
    }
    &:nth-child(15) {
      animation-delay: 1.5s;
    }
    &:nth-child(16) {
      animation-delay: 1.6s;
    }
    &:nth-child(17) {
      animation-delay: 1.7s;
    }
    &:nth-child(18) {
      animation-delay: 1.8s;
    }
    &:nth-child(19) {
      animation-delay: 1.9s;
    }
    &:nth-child(20) {
      animation-delay: 2s;
    }
    &:nth-child(21) {
      animation-delay: 2.1s;
    }
    &:nth-child(22) {
      animation-delay: 2.2s;
    }
    &:nth-child(23) {
      animation-delay: 2.3s;
    }
    &:nth-child(24) {
      animation-delay: 2.4s;
    }
    &:nth-child(25) {
      animation-delay: 2.5s;
    }
    &:nth-child(26) {
      animation-delay: 2.6s;
    }
    &:nth-child(27) {
      animation-delay: 2.7s;
    }
    &.load {
      animation: ${ani?.fadeIn} 0.4s linear both;
    }
    &:hover {
      animation: ${ani?.rubberBand};
      animation-duration: 1s;
      animation-fill-mode: both;
    }
    &#letter {
      animation: none;
      color: ${({ theme }) => theme.secondary};
      text-shadow: -0.5rem -0rem 0 ${({ theme }) => theme.primary};
    }
  }
`;

export const SubirForm = styled.section`
  font-size: 0.9rem;
  overflow-x: hidden;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
`;

export const RubberTextTag = styled.h2`
  font-family: "Manrope", sans-serif;
  font-size: 4rem;
  letter-spacing: -0.15rem;
  position: relative;
  display: inline-block;
  ${setTags("h2")}
  & > * {
    display: inline-block;
    color: ${({ theme }) => theme.primary};
  }
  & > span {
    display: inline-block;
    cursor: default;

    &:hover {
      animation-duration: 1s;
      animation-fill-mode: both;
    }
    &#letter {
      animation: none;
      color: ${({ theme }) => theme.secondary};
      text-shadow: -0.5rem -0rem 0 ${({ theme }) => theme.primary};
    }
  }
`;

export const ListsStyled = styled.div`
  min-width: 20rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  z-index: 40;
  & .option {
    text-align: center;
    background: ${colors.black + "9"};
      cursor: pointer;
      &:hover {
        color: ${colors.green}
      }
`;

export const ViewItemStyled = styled.div<{color: string}>`
  overflow: hidden;
  & .item {
    width: 100%;
    height: 100%;
    background: ${p => p.color};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .3s;
    & a{
      text-decoration: none;
      font-size: 1.2rem;
      font-family: "Manrope";
      color: ${colors.white};
      text-transform: uppercase;
      font-weight: 900;
      position: relative;
      &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border:1px dashed ${colors.gray_el};
        top: 0%;
        left: 0%%;
      }
    }
    &:hover{
      transform: scale(1.5);
    }
  }
`
import styled from "styled-components";
import { colors, setBigLetters } from ".";

export const DocumentStyled = styled.section`
  font-size: 0.9rem;
  overflow: hidden;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 3rem;
  ${setBigLetters("documents")}
  &::after {
    color: ${({ theme }) => theme.bigLetter};
  }
  & > div {
    &.up {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      z-index: 2;
    }
    &.down {
      z-index: 1;
      & .viewer {
        width: 100%;
        height: 48rem;
        background: ${colors.gray_d};
        box-shadow: 0 0 10rem ${colors.black + "9"};
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
		border-radius: .5rem;
        padding: 0;
		& > h3{
			color: ${colors.white}!important;
		}

        @media (min-width: 768px) {
          padding: 3rem 6rem 0 6rem;
        }
        &::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }
        &::-webkit-scrollbar-button {
          width: 0px;
          height: 0px;
        }
        &::-webkit-scrollbar-thumb {
          background: #e1e1e1;
          border: 0px none #ffffff;
          border-radius: 0px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }
        &::-webkit-scrollbar-thumb:active {
          background: #000000;
        }
        &::-webkit-scrollbar-track {
          background: #666666;
          border: 0px none #ffffff;
          border-radius: 0px;
        }
        &::-webkit-scrollbar-track:hover {
          background: #666666;
        }
        &::-webkit-scrollbar-track:active {
          background: #333333;
        }
        &::-webkit-scrollbar-corner {
          background: transparent;
        }
        & > * {
          border-radius: 0.5rem;
          box-shadow: 0 0 2rem ${colors.black + 3};
        }
        & .download {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: ${colors.green};
          position: fixed;
          bottom: 3rem;
          right: 5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          & > * {
            color: ${colors.gray};
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

import styled from "styled-components";
import { colors } from ".";

const CONSTANTS = {
  background:
    "https://w0.peakpx.com/wallpaper/384/833/HD-wallpaper-blured-background-abstract-blur.jpg",
};

export const CurriculumStyled = styled.div`
  min-height: 120rem;
  background: ${colors.gray};
  padding: 2rem 2rem 0 2rem;
  & .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 2rem ${colors.black + 6};
    padding: 1rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
    background: url(${CONSTANTS.background});
    border-radius: 0.5rem;
    background-size: cover;
    background-position: center;
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: grayscale(0.2) invert(0.123) saturate(0.9);
    }
    & .img-profile {
      z-index: 1;
      border-radius: 50%;
      overflow: hidden;
      width: 15rem;
      height: 15rem;

      & img {
        width: 15rem;
      }
    }
    & h3, p {
			color: ${colors.white}!important;
    }
    & h3 {
      z-index: 1;
      font-size: 1.5rem;
      font-family: "Manrope";
    }
    & p {
      z-index: 1;
    }
    & .email {
      z-index: 1;
      color: ${colors.gray_d};
      font-weight: bold;
      text-decoration: none;
    }
  }

  & .body {
    display: flex;
    justify-content: space-between;
    & .left {
      width: 20rem;
      & > * {
        box-shadow: 0 0 2rem ${colors.black + 3};
        margin-bottom: 1.5rem;
      }
      & > * {
        background: ${colors.gray_d};
        padding: 0.5rem;
        border-radius: 0.5rem;
        overflow: hidden;
        & h3 {
          padding-bottom: 0.5rem;
          text-align: center;
          text-transform: uppercase;
          color: ${colors.green};
        }
        & > a {
          border-top: 1px solid ${colors.gray_el + "55"};
        }

        &.info {
          & > *:nth-child(3) {
            cursor: pointer;
            &:hover {
              color: ${colors.green};
            }
          }
          & .social {
            padding: 0 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & a {
              font-size: 2rem;
              color: white;

              &:hover {
                color: ${colors.green};
              }
            }
          }
          & a:nth-child(4) {
            border-bottom: 1px solid ${colors.gray_el + "55"};
          }
        }
      }
    }

    & .right {
      max-width: 45rem;
      color: ${({ theme }) => theme.background};
      & > div {
        padding: 1rem;
        background: white;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 0 2rem ${colors.black + 3};

        & h3 {
          font-size: 1.5rem;
          text-align: center;
          font-family: "Manrope";
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        & section {
          margin-bottom: 1rem;
          text-align: justify;
        }
      }

      & .experience {
        & > * {
          &:first-child {
          }
        }
      }
    }
  }

  .print {
    background: red;
    font-size: 40rem;
  }
`;

export const ItemStyled = styled.a`
  display: block;
  text-decoration: none;
  color: ${colors.white};
  width: 100%;
  padding: 0.5rem;
`;

export const CardStyled = styled.div`
  margin-top: 1rem;
  background: ${colors.gray};
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem ${colors.black + "9"};
  border-bottom: 1px solid ${colors.gray_d};
  & h4 {
    color: ${colors.green};
  }
  & b {
    color: ${colors.gray_l};
  }
`;

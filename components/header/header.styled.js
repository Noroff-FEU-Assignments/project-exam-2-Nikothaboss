import styled from "styled-components";
import { device, padding } from "../../styles/styleVariables";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  /* border-bottom: 1px solid black; */
  @media ${device.laptopL} {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .desktop_nav {
    font-weight: 600;
    margin: 0;
    width: 35%;
    @media ${device.laptopL} {
      width: 45%;
    }
    @media ${device.laptop} {
      width: 45%;
    }
    @media ${device.tablet} {
      display: none;
    }

    li {
      cursor: pointer;
    }
  }

  .burger_nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
    background: white;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    li {
      margin-bottom: 2rem;
    }
  }

  .burger_icon_container,
  .burger_icon {
    display: none;
    @media${device.tablet} {
      display: flex;
      align-items: center;
      z-index: 99;
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    h2 {
      margin: 0 0 0 1rem;
    }
  }
`;

import styled from "styled-components";
import { device, padding } from "../../styles/styleVariables";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${padding.desktop};
  border-bottom: 2px solid black;
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .desktop_nav {
    margin: 0;
    width: 25%;
    @media ${device.laptopL} {
      width: 35%;
    }
    @media ${device.laptop} {
      width: 40%;
    }
    @media ${device.tablet} {
      display: none;
    }
  }

  .burger_nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
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

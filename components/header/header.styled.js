import styled from "styled-components";
import { device, padding } from "../../styles/styleVariables";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${padding.desktop};
  border: 1px solid red;
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  nav {
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
`;

import styled from "styled-components";
import { device, fonts } from "./styleVariables";
export const HomeStyled = styled.main`
  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 1rem;
    /* height: 500px; */
    @media${device.tablet} {
      flex-direction: column;
      flex-direction: column-reverse;
    }
  }

  .intro_box {
    font-size: 1.2rem;
    font-weight: 800;
    font-family: ${fonts.poppins};
    padding: 1.2rem;
    /* height: 800px; */
    background: black;
    color: white;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: inherit; */

    p {
      text-align: center;
    }

    @media${device.tablet} {
      width: 100%;
    }
    @media${device.mobileL} {
      font-size: 0.9rem;
    }
  }
`;

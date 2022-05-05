import styled from "styled-components";
import { device } from "./styleVariables";
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
  }

  .cards_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    width: 24%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media${device.laptop} {
      width: 49%;
      margin-bottom: 1rem;
    }
    @media${device.mobileL} {
      width: 100%;
    }
  }

  section {
    padding: 1rem;
  }
`;

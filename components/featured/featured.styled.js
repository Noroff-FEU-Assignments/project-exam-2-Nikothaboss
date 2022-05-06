import styled from "styled-components";
import { device } from "../../styles/styleVariables";

export const FeaturedStyled = styled.section`
  padding: 1rem;
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

import styled from "styled-components";
import { device } from "./styleVariables";
export const HotelsStyled = styled.main`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    width: 24%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 1rem;
    cursor: pointer;

    h2 {
      font-size: 1rem;
    }

    .info {
      padding: 0.5rem;
    }

    @media${device.laptop} {
      width: 49%;
      margin-bottom: 1rem;
    }
    @media${device.mobileL} {
      width: 100%;
    }
  }
`;

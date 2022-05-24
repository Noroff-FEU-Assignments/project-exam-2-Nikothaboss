import styled from "styled-components";
import { colors } from "./styleVariables";

export const AdminStyled = styled.main`
  padding: 1rem;
  .tab_selector {
    display: flex;
    justify-content: space-between;
  }

  .tab {
    border: 1px solid black;
    padding: 0.5rem;
    width: 25%;
    display: flex;
    justify-content: center;
    background: ${colors.secondary};
    color: white;
    cursor: pointer;
  }

  .active {
    border: 2px solid ${colors.cta};
  }

  .bookings {
  }

  .booking {
    /* height: 50px; */
    border: 1px solid black;
    justify-content: space-between;
    display: flex;
    padding: 0.5rem;
    p {
      width: 16%;
      text-align: center;
    }
  }

  .messages {
    display: flex;
    flex-wrap: wrap;

    .top {
      display: flex;
      justify-content: space-between;
    }
  }

  .message {
    border: 1px solid black;
    width: 50%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

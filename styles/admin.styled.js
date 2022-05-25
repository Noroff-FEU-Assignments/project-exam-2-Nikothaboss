import styled from "styled-components";
import { boxShadows, colors, device } from "./styleVariables";

export const AdminStyled = styled.main`
  padding: 1rem;
  .tab_selector {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

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
  }

  .bookings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .booking {
    /* height: 50px; */
    /* border: 1px solid black; */
    box-shadow: ${boxShadows.card}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 0.5rem; */
    margin-bottom: 1rem;
    width: 49%;

    @media${device.mobileL} {
        width: 100%;
      }

    .hotel {
    }

    .room {
    }

    .duration {
      display: flex;
      justify-content: space-between;
      @media${device.tablet} {
        flex-direction: column;
      }
    }

    .guests {
      display: flex;
      justify-content: space-between;
      /* @media${device.tablet} {
        flex-direction: column;
      } */
    }

    .block {
      border: 1px solid black;
      width: 100%;
      padding: 0 2rem;

      @media${device.laptop} {
        padding: 0 0.5rem;
      }
    }
  }

  .messages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    min-height: 86vh;

    .top {
      display: flex;
      justify-content: space-between;
      @media${device.tablet} {
        flex-direction: column
      }
    }
  }

  .message {
    box-shadow: ${boxShadows.card}
    border: 1px solid black;
    width: 49%;
    padding: 1rem;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;
    @media${device.mobileL} {
        width: 100%;
    }
    @media${device.tablet}{
        max-height: 80%;
    }
  }
`;

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

  /* Bookings */

  .bookings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .booking {
    /* height: 50px; */
    /* border: 1px solid black; */
    box-shadow: ${boxShadows.card};
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

  /* Messages */

  .messages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 86vh;

    .top {
      display: flex;
      justify-content: space-between;
      @media${device.tablet} {
        flex-direction: column;
      }
    }
  }

  .message {
    box-shadow: ${boxShadows.card};
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
    @media${device.tablet} {
    }
  }

  /* Edit */
  .edit_container {
  }

  .delBtn {
    padding: 0.5rem;
    background: red;
    color: white;
    margin-top: 1rem;
    width: 20%;
    text-align: center;
    border-radius: 0.1rem;
  }

  .submit_btn {
    padding: 0.5rem;
    margin-top: 1rem;
    width: 20%;
  }

  .hotel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    box-shadow: ${boxShadows.card};

    position: relative;
    .img_container {
      width: 20%;
    }

    .overlay {
      position: absolute;
      top: 10;
      right: 0;
      z-index: 9999999;
    }

    .edit_icon {
      width: 10%;
      margin-right: 1rem;
      cursor: pointer;
    }

    .hotel_img {
      object-fit: cover;
      width: 100%;
    }

    .name,
    .rating,
    .featured {
      width: 20%;
    }
  }
`;

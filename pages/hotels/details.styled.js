import styled from "styled-components";
import { boxShadows, device, fonts } from "../../styles/styleVariables";

export const DetailsStyled = styled.main`
  padding: 1rem;
  min-height: 86vh;
  .about {
    display: flex;
    box-shadow: ${boxShadows.card};
    @media${device.laptop} {
      flex-direction: column;
    }
  }
  .img_container {
    /* aspect-ratio: 16/9; */
    width: 50%;
    /* margin: auto; */
    @media${device.laptop} {
      width: 100%;
    }
  }

  .image {
    object-fit: cover;
    width: 100%;
  }

  .img_preview {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid white;
  }

  .small_img_container {
    width: 24.6%;
  }

  .small_img {
    object-fit: cover;
  }

  .info_container {
    /* aspect-ratio: 16/9; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    padding: 1rem 1rem 0 1rem;

    @media${device.laptop} {
      width: 100%;
      padding: 1rem;
    }

    h2 {
      margin-top: 0;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 2rem;
      font-family: ${fonts.poppins};
    }
  }

  .rooms {
    display: flex;
    justify-content: space-between;
    .room {
      width: 33%;
      box-shadow: ${boxShadows.card};
    }

    .room_img {
      object-fit: cover;
    }

    .room_info {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    p {
      font-family: ${fonts.poppins};
    }
  }
`;

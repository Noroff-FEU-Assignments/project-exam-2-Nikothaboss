import styled from "styled-components";
import { device } from "../../styles/styleVariables";

export const CarouselStyled = styled.div`
  width: 75%;
  @media${device.tablet} {
    width: 100%;
  }
  /* height: 50%; */
  .img_container {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
    height: 100%;
  }
  .image {
    min-width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
  }
`;

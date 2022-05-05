import styled from "styled-components";

export const CarouselStyled = styled.div`
  width: 75%;
  /* height: 50%; */
  .img_container {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
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

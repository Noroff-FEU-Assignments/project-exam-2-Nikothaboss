import styled from "styled-components";

export const CarouselStyled = styled.div`
  width: 75%;
  /* height: 100%; */
  .img_container {
      display: flex;
      overflow-x: scroll;
    width: 100%;
    height: 100%;
  }
  .image {
    width: 100%;
    height: 100%
    /* max-height: 500px; */
    object-fit: cover;
  }
`;

import styled from "styled-components";

export const DetailsStyled = styled.main`
  padding: 1rem;
  min-height: 86vh;
  section {
    display: flex;
  }
  .img_container {
    aspect-ratio: 16/9;
    width: 50%;
    /* margin: auto; */
  }

  .image {
    object-fit: cover;
    width: 100%;
  }

  .info_container {
    aspect-ratio: 16/9;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 50%;
    padding: 1rem;
  }
`;

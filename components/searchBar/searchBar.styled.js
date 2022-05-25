import styled from "styled-components";
import { colors, device } from "../../styles/styleVariables";

export const SearchBarStyled = styled.div`
  width: 33%;
  position: relative;

  @media${device.tablet} {
    width: 75%;
  }
  @media${device.mobileL} {
    width: 50%;
  }
  input {
    padding: 0.5rem 1rem;
    width: 100%;
  }

  div {
    left: 0;
    /* width: 100%; */
    /* height: 100%; */
  }

  .img_container {
    width: 33%;
  }

  .searchImg {
    object-fit: cover;
    width: 100%;
  }

  .filterResults {
    display: flex;
    flex-direction: column;
    position: absolute;
    /* max-height: 500px; */
    ::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
    overflow-y: scroll;
    background: ${colors.primary};
    z-index: 999;
    border: 1px dotted black;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .singleResult {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0.5rem 0.25rem 0;
  }
`;

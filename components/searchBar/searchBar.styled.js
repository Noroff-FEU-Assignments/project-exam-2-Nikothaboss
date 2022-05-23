import styled from "styled-components";
import { colors, device } from "../../styles/styleVariables";

export const SearchBarStyled = styled.div`
  width: 33%;
  position: relative;

  @media${device.tablet} {
    width: 75%;
  }
  input {
    padding: 0.5rem;
    width: 100%;
  }

  div {
    left: 0;
    /* width: 100%; */
    /* height: 100%; */
  }

  .searchImg {
    object-fit: cover;
  }

  .filterResults {
    display: flex;
    flex-direction: column;
    position: absolute;
    max-height: 500px;
    ::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
    overflow-y: scroll;
    background: ${colors.primary};
    z-index: 999;
  }
`;

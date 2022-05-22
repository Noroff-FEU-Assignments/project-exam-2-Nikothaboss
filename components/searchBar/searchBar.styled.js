import styled from "styled-components";
import { device } from "../../styles/styleVariables";

export const SearchBarStyled = styled.div`
  width: 33%;

  @media${device.tablet} {
    width: 75%;
  }
  input {
    padding: 0.5rem;
    width: 100%;
  }
`;

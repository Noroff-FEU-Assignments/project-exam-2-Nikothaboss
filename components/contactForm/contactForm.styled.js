import styled from "styled-components";
import { device } from "../../styles/styleVariables";

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 83vh;
  width: 35%;

  padding: 1rem;
  margin: auto;
  @media${device.laptopL} {
    width: 50%;
  }
  @media${device.laptop} {
    width: 75%;
  }
  @media${device.tablet} {
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  input,
  select {
    padding: 0.5rem;
    margin: 0.5rem 0 0 0;
  }
  label {
    font-weight: 600;
    margin-top: 1rem;
  }
  legend {
    font-weight: 600;
    font-size: 2rem;
  }
  button {
    padding: 0.5rem;
    margin-top: 1rem;
  }
  span {
    color: red;
  }
  textarea {
    resize: vertical;
    height: 10rem;
  }
`;

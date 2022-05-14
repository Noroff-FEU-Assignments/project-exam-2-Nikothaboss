import styled from "styled-components";

export const LoginStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 86vh;

  fieldset {
    /* border: 1px solid black; */
    width: 25%;
    padding: 1rem;
    border-radius: 0.1rem;
  }

  input {
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 1rem;
  }

  legend {
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.5rem 1rem;
    background: #be7171;
    color: white;
  }

  img {
    width: 1rem;
  }

  h4 {
    color: red;
  }
`;

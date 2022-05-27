import styled from "styled-components";
import { colors, device } from "../../styles/styleVariables";

export const CreateFormStyled = styled.form`
  display: flex;
  justify-content: center;
  background: ${colors.primary};
  padding: 1rem;
  fieldset {
    width: 60%;
    @media${device.tablet} {
      width: 90%;
    }
  }
  div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .checkbox {
    padding: 1rem;
    background: red;
  }

  .range {
    padding: 0;
  }

  .row {
    flex-direction: row;
    align-items: center;
  }

  label,
  legend {
    font-weight: 600;
  }

  output {
    margin-left: 1rem;
  }

  textarea {
    resize: vertical;
  }
  span {
    margin-bottom: 1rem;
    color: red;
  }

  button {
    background: ${colors.thirdColor};
    color: white;
  }
`;

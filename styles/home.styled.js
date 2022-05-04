import styled from "styled-components";
export const HomeStyled = styled.main`
  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 1rem;
  }

  .intro_box {
    background: black;
    color: white;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: inherit; */

    p {
      text-align: center;
    }
  }
`;
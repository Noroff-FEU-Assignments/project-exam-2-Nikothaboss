import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${colors.secondary};
  color: white;

  h3,
  strong,
  div {
    width: 33%;
    text-align: center;
  }

  h3 {
    text-align: left;
  }

  .site_links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

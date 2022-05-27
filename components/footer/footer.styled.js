import styled from "styled-components";
import { colors, device, fonts } from "../../styles/styleVariables";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${colors.secondary};
  color: white;
  font-family: ${fonts.poppins};
  @media${device.tablet} {
    flex-direction: column;
  }

  p {
    font-weight: 800;
  }

  h3,
  strong,
  div {
    /* width: 33%; */
    text-align: center;
  }

  h3 {
    text-align: left;
  }

  .site_links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 56%;
    @media${device.tablet} {
      width: 100%;
    }
  }
`;

import styled from "styled-components";
import { boxShadows, device } from "../../styles/styleVariables";
import { motion } from "framer-motion";
import { colors } from "../../styles/styleVariables";

const MotionDiv = motion.div;

export const FeaturedStyled = styled.section`
  padding: 1rem;
  .cards_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
  }

  section {
    padding: 1rem;
  }
`;

export const CardStyled = styled(MotionDiv)`
  width: 24%;
  box-shadow: ${boxShadows.card};

  /* &:hover {
    box-shadow: ${boxShadows.card_hover};
  } */
  border-radius: 0.1rem;
  overflow: hidden;

  @media${device.laptop} {
    width: 49%;
    margin-bottom: 1rem;
  }
  @media${device.mobileL} {
    width: 100%;
  }
`;

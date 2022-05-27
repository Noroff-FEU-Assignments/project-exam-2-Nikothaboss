import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, device } from "../../styles/styleVariables";

const MotionForm = motion.form;

export const BookingStyled = styled(motion.form)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
  padding: 1rem;

  h2 {
    color: ${colors.secondary};
  }

  fieldset {
    width: 35%;
    @media${device.tablet} {
      width: 60%;
    }
    @media${device.mobileL} {
      width: 90%;
    }
  }

  legend {
    color: ${colors.primary};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  input,
  select {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.6rem;
    background: ${colors.thirdColor};
    border: none;
    cursor: pointer;
    color: white;
  }

  .row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

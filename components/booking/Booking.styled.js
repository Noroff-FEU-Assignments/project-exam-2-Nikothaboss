import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../styles/styleVariables";

const MotionForm = motion.form;

export const BookingStyled = styled(motion.form)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.secondary};
  padding: 1rem;

  fieldset {
    width: 25%;
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

  .row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

import { MdStar, MdStarOutline } from "react-icons/md";
import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const HStack = styled.div`
  display: flex;
`;

const starColor = colors.lightBrown;
const starSize = "1.3rem";

export const checkRating = (rating) => {
  switch (rating) {
    case 0:
      return (
        <HStack>
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
        </HStack>
      );
    case 1:
      return (
        <HStack>
          <MdStar color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
        </HStack>
      );
    case 2:
      return (
        <HStack>
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
        </HStack>
      );
    case 3:
      return (
        <HStack>
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
          <MdStarOutline color={starColor} size={starSize} />
        </HStack>
      );
    case 4:
      return (
        <HStack>
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStarOutline size={starSize} color={starColor} />
        </HStack>
      );
    case 5:
      return (
        <HStack>
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
          <MdStar color={starColor} size={starSize} />
        </HStack>
      );
    default:
      return;
  }
};

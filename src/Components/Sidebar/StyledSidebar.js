import styled from "styled-components";
import { SIZES , COLORS, DEVICE} from "utils/constants";

const StyledSidebar = styled.section`
  display: block;
  align-content: center;
  justify-content: center;
  width: auto;
  padding: ${SIZES.sm}px;
  background-color: ${COLORS.dark};
  color: #fff;
  border-left: 1px solid ${COLORS.light};
  border-top: 1px solid ${COLORS.light};
  @media ${DEVICE.laptop} {
    padding: ${SIZES.lg}px;
    min-height: 100vh;
  }
`;

export default StyledSidebar;

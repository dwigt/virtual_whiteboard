import styled from "styled-components";
import { SIZES, COLORS, DEVICE } from "utils/constants";

const StyledPage = styled.section`
  padding: ${SIZES.sm}px;
  display: block;
  background: ${COLORS.dark};
  color: white;
  min-height: 100vh;
  border-right: 1px solid ${COLORS.light};
  border-left: 1px solid ${COLORS.light};
  border-top: 1px solid ${COLORS.light};
  @media ${DEVICE.laptop} {
    padding: ${SIZES.lg}px;
  }
`;

export default StyledPage
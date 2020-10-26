import styled from "styled-components";
import { SIZES, COLORS, DEVICE } from "utils/constants";

const StyledTopBar = styled.section`
  align-content: center;
  justify-content: center;
  width: auto;
  background: ${COLORS.dark};
  border-right: 1px solid ${COLORS.light};
  border-left: 1px solid ${COLORS.light};
  padding: ${SIZES.sm}px;
  color: white;
  min-height: 100px;
  @media ${DEVICE.laptop} {
    padding: ${SIZES.lg}px;
  }
`;

export default StyledTopBar;

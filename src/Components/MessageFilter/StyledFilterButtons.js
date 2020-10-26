import styled from "styled-components";
import { SIZES, COLORS, DEVICE } from "utils/constants";

export const StyledFilterButtons = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;

  @media ${DEVICE.laptop} {
    border-bottom: 1px solid ${COLORS.light};
  }
`;

export const StyledFilterButton = styled.div`
  padding: ${SIZES.sm}px;
  cursor: pointer;
`;

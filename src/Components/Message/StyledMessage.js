import styled from "styled-components";
import { SIZES, DEVICE } from "utils/constants";

export const StyledMeta = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledAvatar = styled.div`
  padding: ${SIZES.sm}px;
  img {
    border-radius: 50%;
    width: ${SIZES.xxl}px;
    height: ${SIZES.xxl}px;
  }
`;

export const StyledName = styled.span`
  padding: ${SIZES.sm}px;
  font-weight: 700;
  font-size: 15px;
  @media ${DEVICE.laptop} {
    padding: ${SIZES.md}px;
  }
`;

export const StyledMessage = styled.section`
  word-break: break-all;
`;

export const StyledMessageText = styled.div`
  padding: ${SIZES.sm}px;
  font-size: 15px;
  @media ${DEVICE.laptop} {
    padding: ${SIZES.sm}px ${SIZES.md}px ${SIZES.sm}px ${SIZES.md}px;
  }
`;
import styled from "styled-components";
import { SIZES, COLORS, DEVICE } from "utils/constants";

export const StyledInput = styled.div`
  p {
    margin: 0;
  }

  input[type="text"] {
    width: 80%;

    @media ${DEVICE.laptop} {
      width: 500px;
    }
  }

  button {
    margin-left: ${SIZES.sm}px;
    font-size: 16px;
    border-style: solid;
    padding: 13px;
    background-color: #ffffff;
    border: 1px solid ${COLORS.light};
  }
  input,
  select {
    margin-left: ${SIZES.sm}px;
    font-size: 16px;
    border-style: solid;
    padding: 13px;
    background-color: #ffffff;
    border: 1px solid ${COLORS.light};
  }

  label {
    margin-left: ${SIZES.sm}px;
  }
`;

export const StyledSelect = styled.div`
  margin-top: ${SIZES.sm}px;
`;

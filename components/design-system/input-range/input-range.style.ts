import styled from "@emotion/styled";

export const CalcInput = styled.input`
  -webkit-appearance: none !important;
  background:#36B189;
  height: 8px;
  cursor: grab;
  border-radius: 5px;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background:#fff;
    height:30px;
    width: 30px;
    background: linear-gradient(268.02deg, #FF8A00 -14.53%, #FF5C00 96.05%);
    border-radius: 8px;
    box-shadow: 0 0 1px 8px #FF5C00 inset;
  }
`;


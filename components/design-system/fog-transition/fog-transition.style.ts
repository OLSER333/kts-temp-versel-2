import styled from "@emotion/styled";
import { Colors, ZIndex } from "../../../styles";



export const FogTop = styled.div`
  position: absolute;
  left: 0;
  top: 120px; // высота header
  height: 40px;
  background: linear-gradient(180deg, transparent 0%, ${Colors.back} 60%);
  width: 100%;
  z-index: ${ZIndex.frontItem};
  transform: rotate(-180deg);
`;
export const FogBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 150px;
  width: 100%;
  z-index: ${ZIndex.frontItem};
  background: linear-gradient(180deg, transparent 0%, ${Colors.back} 100%);
`;


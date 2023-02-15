import styled from "@emotion/styled";
import { Colors, getCurrentPaddingStyle, Radiuses } from "../../../styles";
import { SectionLayoutT } from "./types";

export const SectionLayout = styled.section<SectionLayoutT>`
  border-radius: ${Radiuses.xxlg};
  ${getCurrentPaddingStyle("cow")};
  ${getCurrentPaddingStyle("cow")};
  
  background: ${Colors.white};
  
`;

export const CardLayout = styled.article<SectionLayoutT>`
  border-radius: ${Radiuses.lg};
  ${getCurrentPaddingStyle("dog")};
  ${getCurrentPaddingStyle("dog")};
  background: ${Colors.white};
`;

export const GetOrderLayout = styled.div<SectionLayoutT>`
  border-radius: ${Radiuses.lg};
  ${getCurrentPaddingStyle("cat")};
  ${getCurrentPaddingStyle("cat")};
  background: ${Colors.white};
`;

import styled from "@emotion/styled";
import { Breakpoints } from "../../../styles";


type TagListWrapperT = {
  isCatalogPage?: boolean
}
export const TagListWrapper = styled.ul<TagListWrapperT>`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  max-width: 100%;
  @media screen and (max-width: ${Breakpoints.phone}) {
    position: absolute;
    top: ${({isCatalogPage}) => isCatalogPage ? '90px' : '50px;'}
  }
`;

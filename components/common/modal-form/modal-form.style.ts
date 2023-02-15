import styled from "@emotion/styled";
import { Breakpoints, Colors, getCurrentGap, ZIndex } from "../../../styles";
import { CalcBtnCold } from "../../design-system/button/button.style";

export const ModalFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  ${getCurrentGap('dog')};
  padding-bottom: 120px; // для того, чтобы плавающая кнопка не над контентом
  padding-top: 45px; // для того, чтобы fog сверху норм был
  position: relative;
  @media screen and (max-width: ${Breakpoints.phone}) {
    gap: 32px;
  }
`;


type ModalFormSendT = {
  themeColor?: string
  themeBgColor?: string
  disabled?: boolean
}
export const ModalFormSend = styled(CalcBtnCold)<ModalFormSendT>`
  width: fit-content;
  bottom: 24px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: ${ZIndex.frontItem + 1};
  background: ${props => props.themeBgColor};
  color: ${props => props.themeColor};
  &:disabled {
    pointer-events: ${props => props.disabled ? 'none' : ''};
  }
  &:hover {
    filter: grayscale(15%);
    color: ${Colors.mainBlack06};
  }
`;

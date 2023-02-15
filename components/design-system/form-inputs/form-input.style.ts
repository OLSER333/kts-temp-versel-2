import styled from "@emotion/styled";
import {
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle, getCurrentGap,
  getCurrentMarginStyle,
  getCurrentPaddingStyle, Radiuses
} from "../../../styles";

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FormInputFieldName = styled.span`
  ${getCurrentMarginStyle('ant', 'bottom')}
  ${getCurrentFontStyle('smallest')}
  ${getCurrentFontSizeStyle('smallest')};
  text-transform: uppercase;
`;

type InputStyleT = {
  isError: boolean
}
export const FormInputStyle = styled.input<InputStyleT>`
  //  нужен isError -> gпоменять цвет букв и границы на (хотя может не надо )
  color: ${({ isError }) => isError ? Colors.red : Colors.mainBlack};
  border-bottom: 2px solid ${({ isError }) => isError ? Colors.red : Colors.mainBlack};;
  ${getCurrentFontStyle('middle')}
  ${getCurrentFontSizeStyle('middle')}
  padding: 0;

  &::placeholder {
    color: ${Colors.mainBlack04}
  }
`;

export const FormTextareaStyle = styled.textarea<InputStyleT>`
  //  нужен isError -> gпоменять цвет букв и границы на (хотя может не надо )
  background: ${Colors.white};
  ${getCurrentFontStyle('little')}
  ${getCurrentFontSizeStyle('little')}
  ${getCurrentPaddingStyle('rat')};
  border-radius: ${Radiuses.xs};
  min-height: 40px;

  &::placeholder {
    color: ${Colors.mainBlack04}
  }
`;

export const FormCheckboxStyle = styled.label`
  display: flex;
  align-items: center;
  ${getCurrentGap('butterfly')}
  cursor: pointer;
  
  input[type='checkbox'] {
    appearance: none;
    border-radius: ${Radiuses.circle};
    border: 2px solid ${Colors.mainBlack};
    min-width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input[type='checkbox']:checked {
    border-color: ${Colors.orange}
  }
  input[type='checkbox']:checked::before {
    content: '';
    background: ${Colors.orange};
    width: 16px;
    height: 16px;
    border-radius: ${Radiuses.circle};
    
  }
  span {
    ${getCurrentFontStyle('smallest')}
    ${getCurrentFontSizeStyle('smallest')};
    text-transform: uppercase;
    max-width: 280px;
  }
`;


export const FormSelectStyle = styled.select`
  //  нужен isError -> gпоменять цвет букв и границы на (хотя может не надо )
  ${getCurrentPaddingStyle('rat')}
  background: ${Colors.white};
  border-radius: ${Radiuses.xxs};
  
   // option:checked {
   //   color: ${Colors.orange};
   // }
  option[selected="selected"] {
    background: ${Colors.white};
  }
   option{
     appearance: none;
   }

  .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable {
    background-color: transparent;
    color: black;
  }
  
`;

export const FormInputErrorText = styled.span`
  color: ${Colors.red};
  ${getCurrentMarginStyle('bacteria', 'top')}
  position: absolute;
  top: 100%;

`;

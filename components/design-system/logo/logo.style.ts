import styled from "@emotion/styled";
import { Logo } from "../../../assets";
import { Colors, getCurrentFontSizeStyle } from "../../../styles";

type LogoWrapperT = {
  size: 'footer' | 'header'
  logoIsBlack?: boolean
  isPhone?: boolean
  isOpen?: boolean
}

export const LogoWrapper = styled.a<LogoWrapperT>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.color};
  font-weight: 700;
  ${props => props.size === 'footer' ?

          getCurrentFontSizeStyle('main') :
          getCurrentFontSizeStyle('middle')};

  transform: ${props => props.size === 'footer' ? 'translateX(-8px)' : ''};
  @media screen and (max-width: 600px) {
    transform: ${props => props.size === 'footer' ? 'translateX(-4px)' : ''};
  }

  span {
    color: ${props => props.size === 'footer' ? `${Colors.black}` : ''};
  
  }

  @media screen and (max-width: 600px) {

    svg, path {
      width: ${props => props.size === 'footer' ? '52px' : ''};
      height: ${props => props.size === 'footer' ? 'fit-content' : ''};
      align-items: ${props => props.size === 'footer' ? 'start' : ''};
    }
  }
  color: ${({ size, logoIsBlack }) => size === 'header' && logoIsBlack ? '#000' : '#fff'};

  justify-content: ${props => props.size === 'header' ? 'center' : ''};


  i {
    font-weight: 700;
    font-style: italic;
  }
`;

export const LogoIcon = styled(Logo)`

  //width: 100%;
  height: 100%;

  width: ${props => props.size === 'footer' ? '120px' : '52px'};

  svg {
    width: ${props => props.size === 'footer' ? '120px' : '52px'};
  }

`;







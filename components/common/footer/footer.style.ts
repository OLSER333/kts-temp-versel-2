import {
  Breakpoints,
  Colors,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentGap,
  getCurrentMarginStyle
} from "../../../styles";
import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

`;

export const FooterInner = styled.div`
  display: grid;
  grid-template-areas: 
    'logo nav contacts'
    'share nav contacts';

  ${getCurrentGap('rat')};
  @media screen and (max-width: ${Breakpoints.phone}) {
    grid-template-areas: 
      'logo'
      'contacts'
      'nav'
      'share';
    gap: 35px;
    
  };

`;

export const FooterNav = styled.div`
  grid-area: nav;
  display: grid;
  grid-template-columns: 1fr;
  ${getCurrentGap('chicken')}
  & > .footerLogo {
    
    grid-area: logo;
    @media screen and (max-width: ${Breakpoints.tabletSM}) {
    width: 200px;
  }

`;
export const FooterNavMain = styled.div`
  display: flex;
  flex-direction: column;
  ${getCurrentGap('rat')}
  color: ${Colors.mainBlack};
  ${getCurrentFontSizeStyle('middle')};
  ${getCurrentFontStyle('middle')}
  cursor: pointer;

  a, a:visited, a:link {
    color: inherit;
    
  }
  a:first-letter {
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    flex-direction: row;
    max-width: 222px;
    flex-wrap: wrap;
  }
}`;

export const FooterNavSub = styled.div`
  display: flex;
  flex-direction: column;
  ${getCurrentGap('butterfly')};
  ${getCurrentFontSizeStyle('smallest')};
  ${getCurrentFontStyle('smallest')};
  color: ${Colors.mainBlack06};
  text-transform: uppercase;
  cursor: pointer;

  button {
    width: fit-content;
    padding: 0;
    ${getCurrentGap('butterfly')};
    ${getCurrentFontSizeStyle('smallest')};
    ${getCurrentFontStyle('smallest')};
    color: ${Colors.mainBlack06};
    text-transform: uppercase;
    cursor: pointer;
    
  }

  @media screen and (max-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const FooterContacts = styled.div`
  grid-area: contacts;
  display: flex;
  flex-direction: column;
  ${getCurrentGap('pig')}
`;

export const FooterContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.orange};

  ${getCurrentFontSizeStyle('main')};
  ${getCurrentFontStyle('main')};
  a {
    color: ${Colors.orange}
  }

  a:visited {
    color: ${Colors.orange}
  }
  
`;
export const FooterBtnsWrapper = styled.div`
  display: flex;
  ${getCurrentGap('butterfly')};

  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    flex-direction: column;
  }
`;
export const FooterShareLinks = styled.div`
  grid-area: share;
  display: flex;
  ${getCurrentGap('ant')}
  align-items: center;
`;


export const FooterDivider = styled.div`
  height: 2px;
  width: 100%;
  background: ${Colors.mainBlack};
  opacity: 0.2;
  ${getCurrentMarginStyle('chicken', 'bottom')}
  ${getCurrentMarginStyle('cow', 'top')}
`;

export const FooterEndLabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
export const FooterMadeBy = styled.div`
  a {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
      color: ${Colors.mainBlack};
    
    span {
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
    color: ${Colors.mainBlack04};

    }
  }
  @media screen and (max-width: ${Breakpoints.phone}) {
    font-size: 11px;
  }
`;
export const FooterEndLabel = styled.span`
  color: ${Colors.mainBlack04};
  ${getCurrentFontSizeStyle('little')};
  font-weight: 700;
  @media screen and (max-width: ${Breakpoints.phone}) {
    font-size: 11px;
  }


`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  ${getCurrentGap('bull')}
`;



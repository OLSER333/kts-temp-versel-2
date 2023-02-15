import { Breakpoints, FontFamilies } from "./constants";
import { injectGlobal } from "@emotion/css";
import { resetStyles } from "./reset.style";

export const initGlobalStyles = injectGlobal`
  ${resetStyles}

  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-Bold.otf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-BoldItalic.otf');
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-SemiBold.otf');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-SemiBoldItalic.otf');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-Medium.otf');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Suisse Intl';
    src: url('/fonts/SuisseIntl-Regular.otf');
    font-weight: 400;
    font-style: normal;
  }

  body {
    scroll-behavior: smooth;
    font-family: ${FontFamilies.main};

    margin: 0px auto;
    right: 0px;
    left: 0px;
  }

  input, button, textarea {
    font-family: ${FontFamilies.main};
  }
  .no-scroll {
    overflow-y: hidden;
    @media screen and (min-width: ${Breakpoints.tabletMD}) {
      margin-right:17px
    }
  }
  * { // для якорей отсуп header 
    scroll-margin: 120px;
  }

`;

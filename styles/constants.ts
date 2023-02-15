import { FontSizeNamesT, IndentsT } from "./types";

export enum Breakpoints {
  desktopXXLG = "1920px",
  desktopXLG = "1920px",
  desktopLG = "1600px",
  desktopMD = "1440px",
  desktopSM = "1280px",
  tabletLG = "1024px",
  tabletMD = "896px",
  tabletSM = "768px",
  phone = "600px",
}

export const subsequenceOfBreakpoints = [
  Breakpoints.desktopXXLG, // больше чем 1920px
  Breakpoints.desktopXLG,
  Breakpoints.desktopLG,
  Breakpoints.desktopMD,
  Breakpoints.desktopSM,
  Breakpoints.tabletLG,
  Breakpoints.tabletSM,
  Breakpoints.phone,
];

export enum IndentNames {
  auto = 'auto',
  x1em = "x1em",
  zero = "zero",
  atom = "atom",
  bacteria = "bacteria",
  ant = "ant",
  butterfly = "butterfly",
  rat = "rat",
  chicken = "chicken",
  cat = "cat",
  dog = "dog",
  pig = "pig",
  cow = "cow",
  bull = "bull",
  elephant = "elephant",
  whale = "whale",
  planet = "planet",
}

export enum FontSizeNames {

  slogan = 'slogan',
  main = "main",
  subMain = 'subMain',
  middle = 'middle',
  little = 'little',
  subLittle = 'subLittle',
  smallest = 'smallest',

}

export const enum FontFamilies {
  // main = "'Inter', Arial, sans-serif",
  main = "'Suisse Intl', 'sans-serif'",
}

export const fontStyles = {
  [FontSizeNames.slogan]: `
    font-family:  ${FontFamilies.main};
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  `,
  [FontSizeNames.main]: `
    font-family: ${FontFamilies.main};
    font-style: normal;
    font-weight: 600;
    line-height: 112%;
  `,
  [FontSizeNames.subMain]: `
    font-family: ${FontFamilies.main};
    font-style: normal;
    font-weight: 500;
    line-height: 112%;
  `,
  [FontSizeNames.middle]: `
    font-family: ${FontFamilies.main};
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  `,
  [FontSizeNames.little]: `
    font-family: ${FontFamilies.main};
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  `,
  [FontSizeNames.subLittle]: `
    font-family: ${FontFamilies.main};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  `,
  [FontSizeNames.smallest]: `
    font-family: ${FontFamilies.main};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  `,
};

export enum Colors {

  mainBlack = '#0F1F2F',
  black = '#000',
  white = '#FFFFFF',
  gradient_warm = 'linear-gradient(268.02deg, #FF8A00 -14.53%, #FF5C00 96.05%)',
  gradient_cold = 'linear-gradient(268.02deg, #00C2FF -14.53%, #0085FF 96.05%)',
  red = '#FF3E3E',
  blue = '#01ACFF',
  darkBlue = '',
  orange = '#FF5C00',
  back = '#EAEAEA',

  transparent = "rgba(0, 0, 0, 0)",
  telegramBg = '#01ACFF',
  telegramHoverBg = '#3089e0',
  telegramActiveBg = '#2e82d4',
  vkontakteBg = '#0085FF',
  vkontakteHoverBg = '#0071f2',
  vkontakteActiveBg = '#006be6',
  wildBerries = '#982BCB',
  wildBerriesHoverBg = '#9029c1',
  wildBerriesActiveBg = '#8927b7',

  //additional colors
  mainBlack08 = '#0F1F2FCC',
  mainBlack06 = '#707070',
  mainBlack04 = '#0F1F2F66',
  orange06 = '#fbb792',
  orangeLight = '#ff9150',
  white06 = '#FFFFFF99',
  white04 = '#FFFFFF65',
}

export const baseX = 2;

export const indents: IndentsT = {
  [Breakpoints.desktopXXLG]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${2 * baseX}px`, //
    [IndentNames.ant]: `${4 * baseX}px`, //
    [IndentNames.butterfly]: `${6 * baseX}px`, //
    [IndentNames.rat]: `${8 * baseX}px`, //
    [IndentNames.chicken]: `${10 * baseX}px`, //
    [IndentNames.cat]: `${12 * baseX}px`,
    [IndentNames.dog]: `${16 * baseX}px`,
    [IndentNames.pig]: `${20 * baseX}px`,
    [IndentNames.cow]: `${24 * baseX}px`, //
    [IndentNames.bull]: `${32 * baseX}px`,
    [IndentNames.elephant]: `${40 * baseX}px`,
    [IndentNames.whale]: `${56 * baseX}px`,
    [IndentNames.planet]: `${72 * baseX}px`,
  },
  [Breakpoints.desktopXLG]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${2 * baseX}px`,
    [IndentNames.ant]: `${4 * baseX}px`,
    [IndentNames.butterfly]: `${6 * baseX}px`,
    [IndentNames.rat]: `${8 * baseX}px`,
    [IndentNames.chicken]: `${10 * baseX}px`,
    [IndentNames.cat]: `${12 * baseX}px`,
    [IndentNames.dog]: `${16 * baseX}px`,
    [IndentNames.pig]: `${20 * baseX}px`,
    [IndentNames.cow]: `${24 * baseX}px`,
    [IndentNames.bull]: `${32 * baseX}px`,
    [IndentNames.elephant]: `${40 * baseX}px`,
    [IndentNames.whale]: `${50 * baseX}px`,
    [IndentNames.planet]: `${80 * baseX}px`,
  },
  //123qwe
  [Breakpoints.desktopLG]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${2 * baseX}px`,
    [IndentNames.ant]: `${4 * baseX}px`,
    [IndentNames.butterfly]: `${6 * baseX}px`,
    [IndentNames.rat]: `${8 * baseX}px`,
    [IndentNames.chicken]: `${10 * baseX}px`,
    [IndentNames.cat]: `${12 * baseX}px`,
    [IndentNames.dog]: `${16 * baseX}px`,
    [IndentNames.pig]: `${20 * baseX}px`,
    [IndentNames.cow]: `${24 * baseX}px`,
    [IndentNames.bull]: `${32 * baseX}px`,
    [IndentNames.elephant]: `${40 * baseX}px`,
    [IndentNames.whale]: `${50 * baseX}px`,
    [IndentNames.planet]: `${80 * baseX}px`,
  },
  [Breakpoints.desktopMD]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${2 * baseX}px`,
    [IndentNames.ant]: `${4 * baseX}px`,
    [IndentNames.butterfly]: `${6 * baseX}px`,
    [IndentNames.rat]: `${8 * baseX}px`,
    [IndentNames.chicken]: `${10 * baseX}px`,
    [IndentNames.cat]: `${12 * baseX}px`,
    [IndentNames.dog]: `${16 * baseX}px`,
    [IndentNames.pig]: `${20 * baseX}px`,
    [IndentNames.cow]: `${24 * baseX}px`,
    [IndentNames.bull]: `${32 * baseX}px`,
    [IndentNames.elephant]: `${40 * baseX}px`,
    [IndentNames.whale]: `${50 * baseX}px`,
    [IndentNames.planet]: `${80 * baseX}px`,
  },
  [Breakpoints.desktopSM]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${2 * baseX}px`,
    [IndentNames.ant]: `${4 * baseX}px`,
    [IndentNames.butterfly]: `${6 * baseX}px`,
    [IndentNames.rat]: `${8 * baseX}px`,
    [IndentNames.chicken]: `${10 * baseX}px`,
    [IndentNames.cat]: `${12 * baseX}px`,
    [IndentNames.dog]: `${16 * baseX}px`,
    [IndentNames.pig]: `${20 * baseX}px`,
    [IndentNames.cow]: `${24 * baseX}px`,
    [IndentNames.bull]: `${32 * baseX}px`,
    [IndentNames.elephant]: `${40 * baseX}px`,
    [IndentNames.whale]: `${50 * baseX}px`,
    [IndentNames.planet]: `${80 * baseX}px`,
  },
  [Breakpoints.tabletLG]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${1 * baseX}px`,
    [IndentNames.ant]: `${3 * baseX}px`,
    [IndentNames.butterfly]: `${5 * baseX}px`,
    [IndentNames.rat]: `${7 * baseX}px`,
    [IndentNames.chicken]: `${9 * baseX}px`,
    [IndentNames.cat]: `${10 * baseX}px`,
    [IndentNames.dog]: `${14 * baseX}px`,
    [IndentNames.pig]: `${16 * baseX}px`,
    [IndentNames.cow]: `${20 * baseX}px`,
    [IndentNames.bull]: `${24 * baseX}px`,
    [IndentNames.elephant]: `${32 * baseX}px`,
    [IndentNames.whale]: `${40 * baseX}px`,
    [IndentNames.planet]: `${48 * baseX}px`,
  },
  [Breakpoints.tabletMD]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${1 * baseX}px`,
    [IndentNames.ant]: `${3 * baseX}px`,
    [IndentNames.butterfly]: `${5 * baseX}px`,
    [IndentNames.rat]: `${7 * baseX}px`,
    [IndentNames.chicken]: `${9 * baseX}px`,
    [IndentNames.cat]: `${10 * baseX}px`,
    [IndentNames.dog]: `${14 * baseX}px`,
    [IndentNames.pig]: `${16 * baseX}px`,
    [IndentNames.cow]: `${20 * baseX}px`,
    [IndentNames.bull]: `${24 * baseX}px`,
    [IndentNames.elephant]: `${32 * baseX}px`,
    [IndentNames.whale]: `${40 * baseX}px`,
    [IndentNames.planet]: `${48 * baseX}px`,
  },
  [Breakpoints.tabletSM]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${1 * baseX}px`,
    [IndentNames.ant]: `${2 * baseX}px`,
    [IndentNames.butterfly]: `${4 * baseX}px`,
    [IndentNames.rat]: `${6 * baseX}px`,
    [IndentNames.chicken]: `${8 * baseX}px`,
    [IndentNames.cat]: `${9 * baseX}px`,
    [IndentNames.dog]: `${12 * baseX}px`,
    [IndentNames.pig]: `${14 * baseX}px`,
    [IndentNames.cow]: `${16 * baseX}px`,
    [IndentNames.bull]: `${20 * baseX}px`,
    [IndentNames.elephant]: `${26 * baseX}px`,
    [IndentNames.whale]: `${32 * baseX}px`,
    [IndentNames.planet]: `${40 * baseX}px`,
  },
  [Breakpoints.phone]: {
    [IndentNames.auto]: "auto",

    [IndentNames.x1em]: "1em",
    [IndentNames.zero]: "0px",
    [IndentNames.atom]: `${baseX}px`,
    [IndentNames.bacteria]: `${1 * baseX}px`,
    [IndentNames.ant]: `${4 * baseX}px`,
    [IndentNames.butterfly]: `${4 * baseX}px`,
    [IndentNames.rat]: `${6 * baseX}px`,
    [IndentNames.chicken]: `${8 * baseX}px`,
    [IndentNames.cat]: `${9 * baseX}px`,
    [IndentNames.dog]: `${8 * baseX}px`,
    [IndentNames.pig]: `${14 * baseX}px`,
    [IndentNames.cow]: `${16 * baseX}px`,
    [IndentNames.bull]: `${20 * baseX}px`,
    [IndentNames.elephant]: `${26 * baseX}px`,
    [IndentNames.whale]: `${32 * baseX}px`,
    [IndentNames.planet]: `${40 * baseX}px`,
  },
};

export const fontSizes: FontSizeNamesT = {
  [Breakpoints.desktopXXLG]: {
    [FontSizeNames.slogan]: `${30 * baseX}px`, // не трогал
    [FontSizeNames.main]: `${20 * baseX}px`,
    [FontSizeNames.subMain]: `${16 * baseX}px`,
    [FontSizeNames.middle]: `${12 * baseX}px`,
    [FontSizeNames.little]: `${9 * baseX}px`,
    [FontSizeNames.subLittle]: `${7 * baseX}px`,
    [FontSizeNames.smallest]: `${6 * baseX}px`,
  },
  [Breakpoints.desktopXLG]: {
    [FontSizeNames.slogan]: `${30 * baseX}px`,
    [FontSizeNames.main]: `${20 * baseX}px`,
    [FontSizeNames.subMain]: `${16 * baseX}px`,
    [FontSizeNames.middle]: `${12 * baseX}px`,
    [FontSizeNames.little]: `${9 * baseX}px`,
    [FontSizeNames.subLittle]: `${7 * baseX}px`,
    [FontSizeNames.smallest]: `${6 * baseX}px`,// ниже - desctopLG - плавно уменш.
  },
  //123qwe
  [Breakpoints.desktopLG]: {
    [FontSizeNames.slogan]: `${30 * baseX}px`,//
    [FontSizeNames.main]: `${20 * baseX}px`,//
    [FontSizeNames.subMain]: `${16 * baseX}px`,//
    [FontSizeNames.middle]: `${12 * baseX}px`,//
    [FontSizeNames.little]: `${9 * baseX}px`,//
    [FontSizeNames.subLittle]: `${7 * baseX}px`,//
    [FontSizeNames.smallest]: `${6 * baseX}px`,//
  },
  [Breakpoints.desktopMD]: {
    [FontSizeNames.slogan]: `${28 * baseX}px`,//
    [FontSizeNames.main]: `${18 * baseX}px`,//
    [FontSizeNames.subMain]: `${16 * baseX}px`,//
    [FontSizeNames.middle]: `${12 * baseX}px`,//
    [FontSizeNames.little]: `${9 * baseX}px`,//
    [FontSizeNames.subLittle]: `${7 * baseX}px`,//
    [FontSizeNames.smallest]: `${6 * baseX}px`,//
  },
  [Breakpoints.desktopSM]: {
    [FontSizeNames.slogan]: `${26 * baseX}px`,//
    [FontSizeNames.main]: `${18 * baseX}px`,//
    [FontSizeNames.subMain]: `${14 * baseX}px`,//
    [FontSizeNames.middle]: `${10 * baseX}px`,//
    [FontSizeNames.little]: `${9 * baseX}px`,//
    [FontSizeNames.subLittle]: `${7 * baseX}px`,//
    [FontSizeNames.smallest]: `${6 * baseX}px`,//
  },
  [Breakpoints.tabletLG]: {
    [FontSizeNames.slogan]: `${24 * baseX}px`,//
    [FontSizeNames.main]: `${16 * baseX}px`, //
    [FontSizeNames.subMain]: `${14 * baseX}px`, //
    [FontSizeNames.middle]: `${10 * baseX}px`, //
    [FontSizeNames.little]: `${8 * baseX}px`, //
    [FontSizeNames.subLittle]: `${7 * baseX}px`, //
    [FontSizeNames.smallest]: `${6 * baseX}px`, //
  },
  [Breakpoints.tabletMD]: {
    [FontSizeNames.slogan]: `${21 * baseX}px`,//
    [FontSizeNames.main]: `${14 * baseX}px`,//
    [FontSizeNames.subMain]: `${14 * baseX}px`,//
    [FontSizeNames.middle]: `${10 * baseX}px`,//
    [FontSizeNames.little]: `${9 * baseX}px`,//
    [FontSizeNames.subLittle]: `${7 * baseX}px`,//
    [FontSizeNames.smallest]: `${6 * baseX}px`,//
  },
  [Breakpoints.tabletSM]: {
    [FontSizeNames.slogan]: `${19 * baseX}px`,//
    [FontSizeNames.main]: `${14 * baseX}px`,//
    [FontSizeNames.subMain]: `${12 * baseX}px`,//
    [FontSizeNames.middle]: `${10 * baseX}px`,//
    [FontSizeNames.little]: `${8 * baseX}px`,//
    [FontSizeNames.subLittle]: `${7 * baseX}px`,//
    [FontSizeNames.smallest]: `${6 * baseX}px`,//
  },
  [Breakpoints.phone]: {
    [FontSizeNames.slogan]: `${16 * baseX}px`,
    [FontSizeNames.main]: `${12 * baseX}px`, //
    [FontSizeNames.subMain]: `${12 * baseX}px`, //
    [FontSizeNames.middle]: `${8 * baseX}px`, // ~~
    [FontSizeNames.little]: `${7 * baseX}px`,//
    [FontSizeNames.subLittle]: `${6 * baseX}px`, //
    [FontSizeNames.smallest]: `${5 * baseX}px`, //
  },
};

export const enum ZIndex {
  global = 100000,
  header = 10000,
  modal = 1000,
  modalOverlay = 500,
  tooltip = 100,
  frontItem = 10,
  backItem = -1,
}

export const enum Duration {
  progressLineSmooth = "0.2s", // для 
  lgHover = "0.26s", // для больших блоков
  smHover = "0.14s", // для маленьгих блоков
}

export const enum Radiuses {
  xxxlg = "60px",
  xxlg = "48px",
  lg = "32px",
  md = "28px",
  sm = "24px",
  xs = "16px",
  xxs = "8px",
  circle = "50%",
}

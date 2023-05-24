export enum Theme {
  Day = 'Day',
  Night = 'Night',
  Rainbow = 'Rainbow',
}

export interface ThemeInterface {
  background: string
  backgroundLight: string
  primary: string
  primaryDark: string
  primaryLight: string
  highlight: string
  highlightTextColor: string
  border: string
  borderDark: string
  textColor: string

  /* grey: text color -> contrast color */
  greyOne: string

  contrastTextColor: string
  success: string
  danger: string
}

type Themes = {
  [key in Theme]: ThemeInterface
}

export const themes: Themes = {
  /* DAY THEME */
  [Theme.Day]: {
    background: '#EFF2F6',
    backgroundLight: '#FFFFFF',

    border: '#C6C8CC',
    borderDark: '#EAEDF1',
    primary: '#9C9EF3',
    primaryDark: '#CFCFE8',
    primaryLight: '#CCCCED',

    highlight: '#98B6F2',
    highlightTextColor: '#ADA2FF',
    textColor: '#272959',
    contrastTextColor: '#9E9E9E',

    greyOne: '#707687',

    success: '#64B564',
    danger: '#F07D7D',
  },

  /* Night THEME */
  [Theme.Night]: {
    background: '#232D33',
    // border: '#5A5A5A',
    // borderDark: '#344750', // middle of background/backgroundLight
    borderDark: '#465C66', // middle of background/backgroundLight
    backgroundLight: '#274A57',
    // backgroundLight: '#546e7a',
    border: '#314451', // middle of backgroundLight/primary
    primary: '#4D636E',
    primaryDark: '#516A75',
    primaryLight: '#6BC2E8',
    // highlight: '#18ffff',
    highlight: '#65DDEB',
    highlightTextColor: '#FFFFFF',
    textColor: '#ffffff',

    /* grey: text color -> contrast color */
    greyOne: '#E0E0E0',

    contrastTextColor: '#000000',
    success: '#57B557',
    danger: '#F06262',
  },

  /* Rainbow THEME */
  [Theme.Rainbow]: {
    background: '#ADE4DB',
    borderDark: '#C5E8E1', // middle of background/backgroundLight
    backgroundLight: '#5E6D7D',
    border: '#C0DEFF', // middle of backgroundLight/primary
    primary: '#F6BA6F',
    primaryDark: '#FFE5F1',
    primaryLight: '#6DA9E4',
    highlight: '#F6BA6F',
    highlightTextColor: '#5E6D7D',
    textColor: '#4A4444',

    /* grey: text color -> contrast color */
    greyOne: '#DEDEDE',

    contrastTextColor: '#E3CACA',
    success: '#57B557',
    danger: '#F06262',
  },
}

export const defaultTheme = themes[Theme.Day]

export const colors: ThemeInterface = defaultTheme

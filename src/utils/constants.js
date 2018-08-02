import { Platform } from 'react-native';
/**
 * Basic app colors
 */
export const colors = {
  purple: '#8675bb',
  purpleLight: '#a980c4',
  purpleDark: '#666ab1',
  orange: '#F7BB76',
  red: '#F77676',
  green: '#61B961',
  grey: '#46345a',
  darkGray: '#a8a8a8',
  greyOutline: '#c8c8c8',
  lightGrey: '#c8c8c8',
  greyBlue: '#3d2b53',
  primary: '#A980C3',
  primaryDark: '#646AB1',
  primaryLight: '#A980C3',
  primaryBg: '#331A4F',
  primaryBgDark: '#291441',
  white: '#ffffff',
  transparent: 'transparent',
  darkBlue: '#161C36',
  lightBlue: '#A0CADD',
  indigoDark: '#231139',
  indigo: '#281543',
  black: '#000',
  selectionColor: Platform.OS === 'ios' ? '#00C0FF' : undefined
};

/**
   * App themes
   */
export const themes = {
  dark: {
    ...colors,
    bodyBgLight: colors.indigo,
    bodyBg: colors.primaryBgDark,
    headerBg: colors.primaryBgDark,
    cardBgLight: colors.greyBlue,
    cardBgDark: colors.indigoDark,
    activeTintColor: colors.lightBlue,
    inactiveTintColor: colors.lightGrey,
    tabBarColor: '#192543',
    cardBackground: colors.darkBlue,
    headerTitleColor: colors.white,
    textColor: colors.white,
    thumbTintColor: colors.white
  },
  light: {
    ...colors,
    bodyBgLight: colors.indigo,
    bodyBg: colors.white,
    headerBg: colors.primaryBgDark,
    cardBgLight: colors.greyOutline,
    cardBgDark: colors.indigoDark,
    tabBarColor: '#F3F3F3',
    cardBackground: colors.white,
    headerTitleColor: colors.darkGray,
    textColor: colors.primaryLight,
    thumbTintColor: colors.darkGray
  }
};

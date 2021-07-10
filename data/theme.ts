export enum ThemeType {
  Jelly = "jelly",
  Salad = "salad",
  Recipe = "recipe",
  Donut = "donut",

  Juicy = "juicy",
}

export function getTheme() {
  if (typeof window === "undefined") return ThemeType.Juicy

  const { host } = window.location

  if (host.indexOf("jelly.bet") >= 0) return ThemeType.Jelly
  if (host.indexOf("salad.bet") >= 0) return ThemeType.Salad
  if (host.indexOf("recipe.bet") >= 0) return ThemeType.Recipe
  if (host.indexOf("donut.bet") >= 0) return ThemeType.Donut

  return ThemeType.Juicy
}

export function getFavicon() {
  return `/images/favicons/${getTheme()}_favicon.ico`
}

export function getBackground() {
  // todo: change this when we have more backgrounds
  return `/images/jelly_background.png`
}

export function getTitle() {
  let name: string = getTheme()
  if (name === ThemeType.Juicy) return "Juicy.bet"

  name = name.charAt(0).toUpperCase() + name.substring(1)
  return `${name} by Juicy.bet`
}

export function getLogoProps() {
  const theme = getTheme()
  const widths = {
    [ThemeType.Jelly]: 121,
    [ThemeType.Recipe]: 153,
    [ThemeType.Salad]: 165,
    [ThemeType.Donut]: 161,
    [ThemeType.Juicy]: 212,
  }
  return {
    src: `/images/${theme}_logo.png`,
    height: 120,
    width: widths[theme],
  }
}

export const themeColors = {
  [ThemeType.Jelly]: "#FB2261",
  [ThemeType.Recipe]: "#AD631A",
  [ThemeType.Salad]: "#41A13B",
  [ThemeType.Donut]: "#D32B9A",
  [ThemeType.Juicy]: "#FC9917",
}

export function getThemeColor() {
  return themeColors[getTheme()]
}

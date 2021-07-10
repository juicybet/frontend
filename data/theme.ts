export enum ThemeType {
  Jelly = "jelly",
  Salad = "salad",
  Recipe = "recipe",
  Donut = "donut",

  Juicy = "juicy",
}

let theme = ThemeType.Juicy

export function setThemeForHost(url: string) {
  const getTheme = () => {
    if (url.indexOf("jelly.bet") >= 0) return ThemeType.Jelly
    if (url.indexOf("salad.bet") >= 0) return ThemeType.Salad
    if (url.indexOf("recipe.bet") >= 0) return ThemeType.Recipe
    if (url.indexOf("donut.bet") >= 0) return ThemeType.Donut

    return ThemeType.Juicy
  }

  return (theme = getTheme())
}

export function getTheme() {
  return theme
}

export function setTheme(t: ThemeType) {
  theme = t
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
    [ThemeType.Recipe]: 165,
    [ThemeType.Salad]: 153,
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

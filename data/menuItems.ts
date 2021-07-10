import { getTheme, ThemeType } from "./theme"

export type MenuItemData = {
  title: String
  subtitles: String[]
  isOpen: boolean
}

export const getMenuItems = (): MenuItemData[] => {
  const theme = getTheme()
  return [
    {
      title: "Home",
      subtitles: ["About", "Our games"],
      isOpen: theme === ThemeType.Juicy,
    },
    {
      title: "Jelly.bet",
      subtitles: ["Place a bet", "Transaction history", "My history", "My PNL"],
      isOpen: theme === ThemeType.Jelly,
    },
    {
      title: "Donut.bet",
      subtitles: ["Place a bet", "Transaction history", "My history", "My PNL"],
      isOpen: theme === ThemeType.Donut,
    },
    {
      title: "Salad.bet",
      subtitles: ["Current salad", "Salad history", "My history", "My PNL"],
      isOpen: theme === ThemeType.Salad,
    },
    {
      title: "Recipe.bet",
      subtitles: ["Coming soon..."],
      isOpen: theme === ThemeType.Recipe,
    },
    {
      title: "More",
      subtitles: ["Docs", "Source code", "Contracts", "Contact us"],
      isOpen: false,
    },
  ]
}

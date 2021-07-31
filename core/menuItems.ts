import { getSite, SiteType } from "./site"

export type MenuItemData = {
  title: string
  links: {
    title: string
    url: string
  }[]
  site: SiteType
  isOpen: boolean
}

function link(title: string, url = "") {
  return { title, url }
}

export const getMenuItems = (): MenuItemData[] => {
  const site = getSite()
  return [
    {
      title: "Home",
      links: [link("Home"), link("About", "about")],
      site: SiteType.Juicy,
      isOpen: site === SiteType.Juicy,
    },
    {
      title: "Jelly.bet",
      links: [link("Place a bet"), link("Bet History", "history")],
      site: SiteType.Jelly,
      isOpen: site === SiteType.Jelly,
    },
    {
      title: "Donut.bet",
      links: [link("Place a bet")],
      site: SiteType.Donut,
      isOpen: site === SiteType.Donut,
    },
    {
      title: "Salad.bet",
      links: [link("Current Salad"), link("Past Salads", "history")],
      site: SiteType.Salad,
      isOpen: site === SiteType.Salad,
    },
    {
      title: "Recipe.bet",
      links: [link("Coming soon...")],
      site: SiteType.Recipe,
      isOpen: site === SiteType.Recipe,
    },
    {
      title: "More",
      links: [
        link("Docs", "https://docs.juicy.bet"),
        link("Source code", "https://gitlab.com/juicy.bet"),
        link("Contracts", "https://docs.juicy.bet/contracts"),
        link("Contact us", "https://docs.juicy.bet/contact"),
      ],
      site: SiteType.Juicy,
      isOpen: false,
    },
  ]
}

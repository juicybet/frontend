import { Key } from "react"

export type SingleMenu = {
  id?: Key
  title: String
  subtitles: String[]
}

export type MenuData = SingleMenu[]

export const menuData: MenuData = [
  {
    id: 1,
    title: "Home",
    subtitles: ["Place a bet", "Bet History", "My History", "My PNL"],
  },
  {
    id: 2,
    title: "Juicy.Bet",
    subtitles: ["Place a bet", "Bet History", "My History", "My PNL"],
  },
  {
    id: 3,
    title: "Donut.Bet",
    subtitles: ["Place a bet", "Bet History", "My History", "My PNL"],
  },
  {
    id: 4,
    title: "Salad.Bet",
    subtitles: ["Place a bet", "Bet History", "My History", "My PNL"],
  },
  {
    id: 5,
    title: "Info",
    subtitles: ["Place a bet", "Bet History", "My History", "My PNL"],
  },
]

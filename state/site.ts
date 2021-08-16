import { GetServerSideProps } from "next"
import { EnvironmentType, getEnvironment, setEnvironmentForHost } from "./environment"

export enum SiteType {
  Jelly = "jelly",
  Salad = "salad",
  Recipe = "recipe",
  Donut = "donut",

  Juicy = "juicy",
}

export type SiteParams = { site: SiteType; env: EnvironmentType }

let theme = SiteType.Juicy

export function setSiteForHost(url: string, path: string) {
  const env = setEnvironmentForHost(url)
  const getSite = () => {
    if (env === EnvironmentType.Local || env == EnvironmentType.Preview) url += path

    if (url.indexOf("jelly.bet") >= 0) return SiteType.Jelly
    if (url.indexOf("salad.bet") >= 0) return SiteType.Salad
    if (url.indexOf("recipe.bet") >= 0) return SiteType.Recipe
    if (url.indexOf("donut.bet") >= 0) return SiteType.Donut

    return SiteType.Juicy
  }

  return (theme = getSite())
}

export function getSite() {
  return theme
}

export function setSite(t: SiteType) {
  theme = t
}

export function getFavicon() {
  return `/images/favicons/${getSite()}.ico`
}

export function getBackground() {
  // todo: change this when we have more backgrounds
  return `/images/backgrounds/jelly.png`
}

export function getTitle() {
  switch (getSite()) {
    case SiteType.Juicy:
      return "Juicy.bet"
    case SiteType.Jelly:
      return "Jelly by Juicy.bet"
    case SiteType.Donut:
      return "Donut by Juicy.bet"
    case SiteType.Salad:
      return "Salad by Juicy.bet"
    case SiteType.Recipe:
      return "Recipe by Juicy.bet"
  }
}

export function getDescription() {
  switch (getSite()) {
    case SiteType.Juicy:
      return "Betting games with a juicy twist"
    case SiteType.Jelly:
      return "Coin flip with a fruity twist"
    case SiteType.Donut:
      return "Chain betting with a sweet twist"
    case SiteType.Salad:
      return "Russian roulette with a green twist"
    case SiteType.Recipe:
      return "Last man standing with a spicy twist"
  }
}

export function getLogoProps() {
  const theme = getSite()
  const widths = {
    [SiteType.Jelly]: 121,
    [SiteType.Recipe]: 165,
    [SiteType.Salad]: 153,
    [SiteType.Donut]: 161,
    [SiteType.Juicy]: 212,
  }
  return {
    src: `/images/logo/${theme}.png`,
    height: 120,
    width: widths[theme],
  }
}

export function linkTo(site: SiteType, url = "") {
  if (url.startsWith("https://")) return url

  switch (getEnvironment()) {
    case EnvironmentType.Local:
    case EnvironmentType.Preview:
      return `/${url}?site=${site}.bet`
    case EnvironmentType.Production:
      return `https://${site}.bet/${url}`
    case EnvironmentType.LocalDNS:
      return `http://local.${site}.bet:1234/${url}`
    case EnvironmentType.Testnet:
      return `https://testnet.${site}.bet/${url}`
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      site: setSiteForHost(req.headers.host!, req.url!),
      env: setEnvironmentForHost(req.headers.host!),
    },
  }
}

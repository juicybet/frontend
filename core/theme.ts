import { getSite, SiteType } from "./site"

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  fontWeights: [500, 600, 700],
  radii: [0, 2, 4, 16, 9999, "100%"],
  borders: [0, "1px solid", "2px solid"],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    [SiteType.Jelly]: {
      primary: "#FB2261",
      primaryDark: "#C01A4A",
      primaryDarker: "#7B0527",
    },
    [SiteType.Recipe]: {
      primary: "#AD631A",
      primaryDark: "#743E09",
      primaryDarker: "#3F2002",
    },
    [SiteType.Salad]: {
      primary: "#41A13B",
      primaryDark: "#2A7526",
      primaryDarker: "#0F370D",
    },
    [SiteType.Donut]: {
      primary: "#D32B9A",
      primaryDark: "#9A156D",
      primaryDarker: "#650A46",
    },
    [SiteType.Juicy]: {
      primary: "#FC9917",
      primaryDark: "#CB780B",
      primaryDarker: "#734406",
    },
  },
}

export function currentTheme() {
  return theme.colors[getSite()]
}

export default theme

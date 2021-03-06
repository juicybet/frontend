import { getLanguage } from "./I18n"

function getSeparator() {
  switch (getLanguage()) {
    case "ru":
    case "de":
    case "it":
    case "es":
    case "fr":
    case "pt":
    case "vi":
      return "."
    default:
      return ","
  }
}

export function formatNumber(n: number, decimalPlaces = 0): string {
  const thousandSeparator = getSeparator()
  const decimalSeparator = thousandSeparator === "." ? "," : "."
  const n2 = n.toFixed(decimalPlaces).split(".")
  const beforeDecimal = n2[0].replace(/\d(?=(\d{3})+$)/g, "$&" + thousandSeparator)
  if (n2.length > 1) return [beforeDecimal, n2[1]].join(decimalSeparator)
  else return beforeDecimal
}

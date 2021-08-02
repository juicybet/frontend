import * as s from "../i18n/index"

enum PluralForm {
  Zero = "zero",
  One = "one",
  Two = "two",
  Few = "few",
  Many = "many",
  Other = "other",
}

type PluralString = {
  zero?: string
  one?: string
  two?: string
  few?: string
  many?: string
  other: string
}

type StringCollection = Record<
  string,
  {
    singular: Record<string, string>
    plural: Record<string, PluralString>
  }
>

const allStrings: StringCollection = s

const supportedLanguages = ["en"]

const defaultLanguage = "en"

export function validateLanguageCode(lang: string): string {
  if (lang.substr(0, 2) === "zh") {
    // Macau, Hong Kong, Taiwan = Traditional Chinese
    if (["Hant", "MO", "HK", "TW"].find((l) => lang.indexOf(l) >= 0)) {
      lang = "zh-Hant"
    } else {
      lang = "zh-Hans"
    }
  } else {
    lang = lang.substr(0, 2)
  }

  if (supportedLanguages.indexOf(lang) >= 0) return lang

  return defaultLanguage
}

let lang = defaultLanguage
const strings: Record<string, string | PluralString> = {}
export function setLanguage(l = defaultLanguage): void {
  lang = validateLanguageCode(l)
  if (allStrings[lang]) {
    Object.assign(strings, {
      ...allStrings[lang].singular,
      ...allStrings[lang].plural,
    })
  }
  if (!Object.keys(strings).length) {
    // tslint:disable-next-line: no-console
    console.log(`No strings found for language '${lang}'.`)
  }
}

if (typeof window !== "undefined") {
  const w = (window || {}) as any
  w.gettext = () => {
    const s: Record<string, string | PluralString> = {}
    Object.keys(strings)
      .sort()
      .forEach((key) => {
        s[key] = strings[key]
      })
    return JSON.stringify(s)
  }
}

function getPluralForm(n: number) {
  switch (lang) {
    case "ru":
      if (n === 1) return PluralForm.One
      else if (n > 1 && n < 5) return PluralForm.Few
      else return PluralForm.Other
    case "ja":
    case "th":
    case "vi":
    case "ko":
    case "zh-Hans":
    case "zh-Hant":
      return PluralForm.Other
    default:
      return n === 1 ? PluralForm.One : PluralForm.Other
  }
}

function combineLiterals(literals: string[]) {
  return literals.map((str, i) => (i ? `{${i}}${str}` : str)).join("")
}

function translate(str: string, n?: number): string {
  if (!strings[str]) {
    if (lang === "en") strings[str] = str

    console.log(`No translation found in language '${lang}' for:\n   ${str}`)
  }
  if (typeof n !== "number") {
    if (typeof strings[str] === "string") return (strings[str] as string) || str
    if (typeof strings[str] === "object") return (strings[str] as PluralString).other || str
    return str
  }
  const pluralForm = getPluralForm(n)
  if (pluralForm && strings[str] && (strings[str] as PluralString)[pluralForm]) {
    return (strings[str] as PluralString)[pluralForm] || str
  }

  if (lang === "en") strings[str] = { other: str }

  console.log(`No plural form ${pluralForm} found in language ${lang} for:\n   ${str}`)
  return str
}

function replaceVariables(str: string, ...placeholders: string[]) {
  return str.replace(/\{([0-9]+)\}/g, (_, i) => placeholders[i - 1])
}

export function __(literals: any, ...placeholders: any[]): string {
  const str: string = combineLiterals(literals)
  const l = str.length - str.trimLeft().length
  const r = str.length - str.trimRight().length
  const translated = " ".repeat(l) + translate(str.trim()).trim() + " ".repeat(r)
  return replaceVariables(translated, ...placeholders)
}

export function _n(n: number) {
  return function __(literals: any, ...placeholders: any[]): string {
    const str = combineLiterals(literals)
    const translated = translate(str, n)
    return replaceVariables(translated, ...placeholders)
  }
}

export function getLanguage(): string {
  return lang
}

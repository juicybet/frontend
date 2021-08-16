const sites = ["jelly.bet", "juicy.bet", "salad.bet", "recipe.bet", "donut.bet"]

export enum EnvironmentType {
  Local,
  LocalDNS,
  Preview,
  Testnet,
  Production,
}

let environment = EnvironmentType.Preview

export function setEnvironmentForHost(host: string) {
  const port = 1234

  const getEnvironment = () => {
    if (sites.includes(host)) return EnvironmentType.Production
    if (sites.map((s) => `testnet.${s}`).includes(host)) return EnvironmentType.Testnet
    if (sites.map((s) => `local.${s}:${port}`).includes(host)) return EnvironmentType.LocalDNS
    if (host === `localhost:${port}` || `127.0.0.1:${port}`) return EnvironmentType.Local

    return EnvironmentType.Preview
  }

  return (environment = getEnvironment())
}

export function setEnvironment(env: EnvironmentType) {
  environment = env
}

export function getEnvironment() {
  return environment
}

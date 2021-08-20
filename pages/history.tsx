import { useState } from "react"
import { SiteType, SiteParams, setSite } from "../core/site"
import { setEnvironment } from "../core/environment"
import { Meta } from "../components/Utils/Meta"
import { History as JellyHistory } from "../components/Templates/Jelly/History"
import { PastSalads } from "../components/Templates/Salad/PastSalads"
import { Header, Sidebar } from "../components/Molecules"

export { getServerSideProps } from "../core/site"

export default function Home({ site, env }: SiteParams) {
  setSite(site)
  setEnvironment(env)

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
  }

  const HistoryComponent = (() => {
    switch (site) {
      case SiteType.Salad:
        return PastSalads

      case SiteType.Jelly:
      default:
        return JellyHistory
    }
  })()

  return (
    <>
      <Meta />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <HistoryComponent />
    </>
  )
}

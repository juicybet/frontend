import { useState } from "react"
import { Header, Sidebar } from "../components"
import { SiteType, SiteParams, setSite } from "../state/site"
import { setEnvironment } from "../state/environment"
import { Meta } from "../components/Utils/Meta"
import { History as JellyHistory } from "../components/Jelly/History"
import { PastSalads } from "../components/Salad/PastSalads"

export { getServerSideProps } from "../state/site"

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

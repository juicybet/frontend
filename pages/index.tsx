import { useState } from "react"
import { Header, Sidebar } from "../components"
import { SiteType, setSite, SiteParams } from "../state/site"
import { Meta } from "../components/Utils/Meta"
import { setEnvironment } from "../state/environment"
import { Home as JellyHome } from "../components/Jelly/Home"
import { Home as DonutHome } from "../components/Donut/Home"
import { Home as SaladHome } from "../components/Salad/Home"

export { getServerSideProps } from "../state/site"

export default function Home({ site, env }: SiteParams) {
  setSite(site)
  setEnvironment(env)

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
  }

  const HomeComponent = (() => {
    switch (site) {
      case SiteType.Donut:
        return DonutHome
      case SiteType.Salad:
        return SaladHome
      default:
      case SiteType.Jelly:
        return JellyHome
    }
  })()

  return (
    <>
      <Meta />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <HomeComponent />
    </>
  )
}

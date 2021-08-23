import { useState } from "react"
import { Header, Sidebar } from "../components/Molecules"
import { SiteType, setSite, SiteParams } from "../core/site"
import { Meta } from "../components/Utils/Meta"
import { setEnvironment } from "../core/environment"
import { Home as JellyHome } from "../components/Templates/Jelly/Home"
import { Home as DonutHome } from "../components/Templates/Donut/Home"
import { Home as SaladHome } from "../components/Templates/Salad/Home"

export { getServerSideProps } from "../core/site"

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

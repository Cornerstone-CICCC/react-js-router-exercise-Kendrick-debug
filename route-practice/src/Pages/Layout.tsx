import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"



const Layout = () => {
  return (
    <div className="container max-w-full">
    <Header />

    <main className="max-w-2xl mx-auto">
      <Outlet /> {/** Child routes load here */}
    </main>

    <Footer />
  </div>
  )
}

export default Layout
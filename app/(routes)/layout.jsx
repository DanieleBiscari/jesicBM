import Navbar from "../ui/(components)/navbar"
import Footer from "../ui/(components)/footer"

export default function HomepageLayout({children}) {
    return (
      <section>
        <Navbar/>
        {children}
        <Footer></Footer>
      </section>
    )
  }
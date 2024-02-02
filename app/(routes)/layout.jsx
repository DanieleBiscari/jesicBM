import Navbar from "../ui/components/navbar"
import Footer from "../ui/components/footer"

export default function HomepageLayout({children}) {
    return (
      <section>
        <div className="absolute">
          <Navbar/>
        </div>
        {children}
        <div>
          <Footer/>
        </div>
      </section>
    )
  }
import Navbar from "../ui/components/navbar"
import Footer from "../ui/components/footer"

export default function GeneralLayout({children}) {
    return (
      <section>
        <div className="fixed z-50">
          <Navbar/>
        </div>
        {children}
        <div className="">
          <Footer/>
        </div>
      </section>
    )
  }
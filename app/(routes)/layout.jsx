import Navbar from "../ui/components/navbar";
import Footer from "../ui/components/footer";

export default function GeneralLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

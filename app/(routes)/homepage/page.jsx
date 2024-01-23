import Presentation from "./(components)/presentation"
import WhyUs from "./(components)/whyUs"
import OurTeam from "./(components)/ourTeam"
import Principles from "./(components)/principles"
import Graphs from "./(components)/graphs"

export default function Homepage(){
    return(
        <main>
            <section className="flex w-screen h-screen">
                <Presentation />
            </section>
            <section className="flex w-screen h-screen">
                <WhyUs />
            </section>
            <section className="flex w-screen h-screen">
                <OurTeam />
            </section>
            <section className="flex w-screen h-screen">
                <Principles />
            </section>
            <section className="flex w-screen h-screen">
                <Graphs />
            </section>
        </main>
    )
}
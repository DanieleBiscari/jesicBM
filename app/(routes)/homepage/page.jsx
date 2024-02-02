import Presentation from "./(components)/presentation"
import WhyUs from "./(components)/whyUs"
import OurTeam from "./(components)/ourTeam"
import Principles from "./(components)/principles"
import Graphs from "./(components)/graphs"

import styles from '@/app/styles/homepage.module.css';

export default function Homepage(){
    return(
        <main>
            <section className={`${styles.bgPresentation} flex w-screen h-screen`}>
                <Presentation styles={styles}/>
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
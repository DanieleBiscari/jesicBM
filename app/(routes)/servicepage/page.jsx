import styles from '@/app/styles/servicepage.module.css';
import stylesHomepage from '@/app/styles/homepage.module.css';
import ServicePresentation from './(components)/servicePresentation';
import ServiceWhyUs from './(components)/serviceWhyUs';
import WhatWeOffer from './(components)/whatWeOffer';
import ActionPlan from './(components)/actionPlan';
import EndSection from '@/app/ui/components/endSection';
import Image from 'next/image';
import troinabg from "@/public/img/troinabg2.svg"


export default function Page(){
    return(
        <main className="overflow-x-hidden relative">
            <section className="w-screen h-screen relative">
                <ServicePresentation styles={styles}/>
            </section>

            <section className={`w-screen h-screen ${styles.bgWhite}`}>
                <ServiceWhyUs styles={styles}/>
            </section>

            <section className="w-screen h-screen">
                <WhatWeOffer styles={styles}/>
            </section>

            <section>
                <EndSection styles={stylesHomepage}/>
                <div className="w-screen h-[50vh]">
                    <Image
                    src={troinabg}
                    width={1920}
                    height={1080}
                    alt="image troina"
                    className="w-100 h-full object-cover"   
                    />
                </div>
                <div className="rotate-180">
                    <EndSection styles={stylesHomepage}/>   
                </div>
            </section>

            <section className="w-screen h-screen">
                <ActionPlan styles={styles}/>
            </section>
        </main>
    )
}
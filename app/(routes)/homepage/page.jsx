"use client"
import Presentation from "./(components)/presentation"
import WhyUs from "./(components)/whyUs"
import OurTeam from "./(components)/ourTeam"
import Trust1 from "./(components)/trust1"
import Trust2 from "./(components)/trust2"
import styles from '@/app/styles/homepage.module.css';
import Image from "next/image"
import { useState } from "react"
import EndSection from "@/app/ui/components/endSection"
import troinabg from "@/public/img/troinabg.svg"


export default function Homepage(){
    const [overed, setOvered]=useState(null);

    function handleOverOurTeam(id){
        setOvered(id)
    }
    function handleLeaveOurTeam(){
        setOvered(null)
    }

    return(
        <main className="overflow-x-hidden relative">
            <section className={`${styles.bgPresentation}`}>
                <Presentation styles={styles}/>
            </section>
            <section className=" xl:min-h-screen flex justify-center items-center pb-20 lg:pt-20">
                <WhyUs styles={styles}/>
            </section>
                <EndSection styles={styles}/>
            <section className={`${styles.bgOurTeam} w-screen`}>
                <OurTeam styles={styles} overed={overed} handleLeaveOurTeam={handleLeaveOurTeam} handleOverOurTeam={handleOverOurTeam}/>
            </section>
            <section className=" py-20">
                <Trust1 styles={styles}/>
            </section>
            <section>
                <EndSection styles={styles}/>
                <div className="">
                    <Image
                    src={troinabg}
                    width={1920}
                    height={1080}
                    alt="image troina"
                    className="w-100 h-full object-cover"   
                    />
                </div>
                <div className="rotate-180">
                    <EndSection styles={styles}/>   
                </div>
            </section>
            <section className="py-20">
                <Trust2 styles={styles}/>
            </section>

            {overed != null ? <div className={`${styles.whiterFilter} z-0`}></div> : <></>}
        </main>
    )
}
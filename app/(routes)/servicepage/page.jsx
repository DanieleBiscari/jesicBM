"use client";
import styles from "@/app/styles/servicepage.module.css";
import stylesHomepage from "@/app/styles/homepage.module.css";
import ServicePresentation from "./(components)/servicePresentation";
import ServiceWhyUs from "./(components)/serviceWhyUs";
import WhatWeOffer from "./(components)/whatWeOffer";
import ActionPlan from "./(components)/actionPlan";
import EndSection from "@/app/ui/components/endSection";
import Image from "next/image";
import troinabg from "@/public/img/troinabg2.svg";
import { useState } from "react";

export default function Page() {
  const [clicked, setClicked] = useState("");
  return (
    <main className="relative overflow-x-hidden">
      <section className="relative py-48">
        <ServicePresentation styles={styles} />
      </section>

      <section className={`min-h-screen  ${styles.bgWhite}`}>
        <ServiceWhyUs styles={styles} />
      </section>

      <section className="">
        <WhatWeOffer
          styles={styles}
          clicked={clicked}
          setClicked={setClicked}
        />
      </section>

      <section>
        <EndSection styles={stylesHomepage} />
        <div className="h-[50vh]">
          <Image
            src={troinabg}
            width={1920}
            height={1080}
            alt="image troina"
            className=" h-full object-cover"
          />
        </div>
        <div className="rotate-180">
          <EndSection styles={stylesHomepage} />
        </div>
      </section>

      {/* inserire alla classe bgActionPlan l'immagine realizzata da Marco come background */}
      <section className={`${styles.bgActionPlan} ${styles.bgWhite} py-20`}>
        <ActionPlan styles={styles} />
      </section>

      {clicked != "" ? (
        <div className={`${styles.blackerFilter} z-0`}></div>
      ) : (
        <></>
      )}
    </main>
  );
}

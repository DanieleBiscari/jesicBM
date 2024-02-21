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
import { useEffect, useState } from "react";

export default function Page() {
  const [clicked, setClicked] = useState("");
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  });

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
      <section className={`${styles.bgWhite} py-20 relative`}>
        <ActionPlan
          styles={styles}
          windowWidth={windowWidth}
          setWindowWidth={setWindowWidth}
        />
      </section>

      {clicked != "" ? (
        <div className={`${styles.blackerFilter} z-0`}></div>
      ) : (
        <></>
      )}
    </main>
  );
}

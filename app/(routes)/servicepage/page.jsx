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
      const newWindowWidth = window.screen.width;
      setWindowWidth(newWindowWidth);
    };
    
    const bodyElement = document.querySelector("body");

    if (clicked != "") {
      bodyElement.classList.add("overflow-hidden");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      bodyElement.classList.remove("overflow-hidden");
    };
  });

  return (
    <main className={`relative`}>
      <section className="relative py-24 ">
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
        <div className="">
          <Image
            src={troinabg}
            width={1920}
            height={620}
            alt="image troina"
            className={`w-100 h-full object-cover`}
            priority
          />
        </div>
        <div className="rotate-180">
          <EndSection styles={stylesHomepage} />
        </div>
      </section>

      {/* inserire alla classe bgActionPlan l'immagine realizzata da Marco come background */}
      <section id="actionPlan" className={`${styles.bgWhite} relative py-28`}>
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

import styles from "@/app/styles/servicepage.module.css";
import stylesHomepage from "@/app/styles/homepage.module.css";
import ServicePresentation from "./(components)/servicePresentation";
import ServiceWhyUs from "./(components)/serviceWhyUs";
import WhatWeOffer from "./(components)/whatWeOffer";
import ActionPlan from "./(components)/actionPlan";
import EndSection from "@/app/ui/components/endSection";
import Image from "next/image";
import troinabg from "@/public/img/troinabg2.svg";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="relative h-screen w-screen">
        <ServicePresentation styles={styles} />
      </section>

      <section className={`min-h-screen w-screen ${styles.bgWhite}`}>
        <ServiceWhyUs styles={styles} />
      </section>

      <section className="h-screen w-screen">
        <WhatWeOffer styles={styles} />
      </section>

      <section>
        <EndSection styles={stylesHomepage} />
        <div className="h-[50vh] w-screen">
          <Image
            src={troinabg}
            width={1920}
            height={1080}
            alt="image troina"
            className="w-100 h-full object-cover"
          />
        </div>
        <div className="rotate-180">
          <EndSection styles={stylesHomepage} />
        </div>
      </section>

      <section className="h-screen w-screen">
        <ActionPlan styles={styles} />
      </section>
    </main>
  );
}

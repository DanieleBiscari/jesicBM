"use client";
import Image from "next/image";
import Button1 from "@/app/ui/components/button1";
import houseMoney from "@/public/img/houseMoney.svg";
import community from "@/public/img/community.svg";
import balance from "@/public/img/balance.svg";
import location from "@/public/img/location.svg";
import life from "@/public/img/life.svg";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import { useState } from "react";

const WhyUs = ({ styles }) => {
  const [overedItem, setOveredItem] = useState(null);

  function handleOver(id) {
    setOveredItem(id);
  }
  function handleLeave(id) {
    setOveredItem(null);
  }

  return (
    <>
      <div className="flex flex-col-reverse lg:grid lg:h-[95%] lg:grid-cols-2 lg:px-4 ">
        <div
          className={`grid-template-columns: repeat(2, 1fr) 1fr repeat(2, 1fr) hidden place-items-center sm:grid`}
        >
          <div
            onMouseLeave={() => handleLeave()}
            onMouseOver={() => handleOver(0)}
            className={`me-24 h-[12vw] min-h-[8rem] w-[12vw] min-w-[8rem] self-end justify-self-end overflow-hidden rounded-[100%] border-4 border-white`}
          >
            {overedItem === 0 ? (
              <div
                className={`${styles.opacityAnimation} flex h-full w-full flex-col items-center justify-center bg-white text-center text-bluTro`}
              >
                <h3
                  className={`${roboto.className} font-semibold [font-size:_clamp(.8rem,1.4vw,1.4rem)]`}
                >
                  Convenienza
                </h3>
                <p
                  className={`${roboto.className} [font-size:_clamp(.6rem,.9vw,1.1rem)]`}
                >
                  Elevata qualità di vita senza sostenere oneri finanziari
                  eccessivi.
                </p>
              </div>
            ) : (
              <Image
                src={houseMoney}
                width={100}
                height={100}
                className="h-[100%] w-[100%] p-8 lg:p-10"
                alt="house with dollar"
              ></Image>
            )}
          </div>
          <div
            onMouseLeave={() => handleLeave()}
            onMouseOver={() => handleOver(1)}
            className={`ms-24 h-[12vw] min-h-[8rem] w-[12vw] min-w-[8rem] self-end justify-self-start overflow-hidden rounded-[100%] border-4 border-white`}
          >
            {overedItem === 1 ? (
              <div className={`${styles.opacityAnimation} flex h-full w-full flex-col items-center justify-center bg-white p-4 text-center text-bluTro`}>
                <h3
                  className={`${roboto.className} font-semibold [font-size:_clamp(.8rem,1.4vw,1.4rem)]`}
                >
                  Comunità
                </h3>
                <p
                  className={`${roboto.className} [font-size:_clamp(.6rem,.9vw,1.1rem)]`}
                >
                  Calorosa accoglienza. Senso di appartenenza e solidarietà e
                  facile integrazione.
                </p>
              </div>
            ) : (
              <Image
                src={community}
                width={100}
                height={100}
                className=" h-[100%] w-[100%] p-8 lg:p-10"
                alt="comunity in love"
              ></Image>
            )}
          </div>
          <div
            onMouseLeave={() => handleLeave()}
            onMouseOver={() => handleOver(2)}
            className={`col-span-2 h-[12vw] min-h-[8rem] w-[12vw] min-w-[8rem] place-self-center overflow-hidden rounded-[100%] border-4 border-white`}
          >
            {overedItem === 2 ? (
              <div className={`${styles.opacityAnimation} flex h-full w-full flex-col items-center justify-center bg-white p-4 text-center text-bluTro`}>
                <h3
                  className={`${roboto.className} font-semibold [font-size:_clamp(.8rem,1.4vw,1.4rem)]`}
                >
                  Stile di vita
                </h3>
                <p
                  className={`${roboto.className} [font-size:_clamp(.6rem,.9vw,1.1rem)]`}
                >
                  Una comunità per vivere a ritmi sostenibili, più lentamente e
                  con meno frenesia.
                </p>
              </div>
            ) : (
              <Image
                src={balance}
                width={100}
                height={100}
                className=" h-[100%] w-[100%] p-8 lg:p-10"
                alt="balance"
              ></Image>
            )}
          </div>
          <div
            onMouseLeave={() => handleLeave()}
            onMouseOver={() => handleOver(3)}
            className={`me-24 h-[12vw] min-h-[8rem] w-[12vw] min-w-[8rem] self-start justify-self-end overflow-hidden rounded-[100%] border-4 border-white`}
          >
            {overedItem === 3 ? (
              <div className={`${styles.opacityAnimation} flex h-full w-full flex-col items-center justify-center bg-white p-4 text-center text-bluTro`}>
                <h3
                  className={`${roboto.className} font-semibold [font-size:_clamp(.8rem,1.4vw,1.4rem)]`}
                >
                  Location
                </h3>
                <p
                  className={`${roboto.className} [font-size:_clamp(.6rem,.9vw,1.1rem)]`}
                >
                  A soli 20 minuti dal parco dei Nebrodi e ad un’ora
                  dall’aeroporto internazionale di Catania.
                </p>
              </div>
            ) : (
              <Image
                src={location}
                width={100}
                height={100}
                className=" h-[100%] w-[100%] p-8 lg:p-10"
                alt="location"
              ></Image>
            )}
          </div>
          <div
            onMouseLeave={() => handleLeave()}
            onMouseOver={() => handleOver(4)}
            className={`ms-24 h-[12vw] min-h-[8rem] w-[12vw] min-w-[8rem] self-start justify-self-start overflow-hidden rounded-[100%] border-4 border-white`}
          >
            {overedItem === 4 ? (
              <div className={`${styles.opacityAnimation} flex h-full w-full flex-col items-center justify-center bg-white p-4 text-center text-bluTro`}>
                <h3
                  className={`${roboto.className} font-semibold [font-size:_clamp(.8rem,1.4vw,1.4rem)]`}
                >
                  Sostenibilità
                </h3>
                <p
                  className={`${roboto.className} [font-size:_clamp(.6rem,.9vw,1.1rem)]`}
                >
                  Investire qui significa contribuire alla tutela dell'ambiente
                  e alla crescita sostenibile.
                </p>
              </div>
            ) : (
              <Image
                src={life}
                width={100}
                height={100}
                className=" h-[100%] w-[100%] p-8 lg:p-10"
                alt="life"
              ></Image>
            )}
          </div>
        </div>

        <div className="p-10">
          <h1
            className={`${ebGaramond.className} ${styles.h1Custom} mb-8 leading-[1]`}
            style={{ color: "#F5A400" }}
          >
            Perché investire a Troina?
          </h1>
          <p
            className={`${roboto.className} mb-12 xl:pe-32 ${styles.pPresentation}`}
          >
            Troina è molto più di una semplice cittadina dove comprare casa. Il
            nostro obiettivo è riuscire a riqualificare sostenibilmente il suo
            centro storico e creare una comunità che possa abbracciare lo stile
            di vita del luogo, recuperandolo e portando nuovo valore ad una
            terra con molto potenziale.
          </p>
          <Button1
            name={"SCOPRI DI PIÙ →"}
            textColor={"#F5A400"}
            textSize={"1rem"}
            borderColor={"#F5A400"}
            url={"/servicepage"}
          />
        </div>
      </div>
    </>
  );
};

export default WhyUs;

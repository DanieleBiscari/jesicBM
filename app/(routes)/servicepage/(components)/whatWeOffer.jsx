import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import ServiceModal from "@/app/ui/components/serviceModal";
import Image from "next/image";
import serviceImg1 from "@/public/img/serviceImg1.png";
import serviceImg2 from "@/public/img/serviceImg2.svg";
import serviceImg3 from "@/public/img/serviceImg3.png";
import serviceImg4 from "@/public/img/serviceImg4.png";
import whatWeOffer from "@/public/img/whatWeOffer.png";
import CardServiceInPresence from "./cardServiceInPresence";
import useLang from "@/app/hooks/useLang";
import { useMyContext } from "@/app/contexts/context";

const WhatWeOffer = ({ styles, clicked, setClicked }) => {
  const { language, setLanguage } = useMyContext();
  const { lang } = useLang(language);

  function handleClick(name) {
    setClicked(name);
  }
  const services = [
    {
      title: "We Talk Service",
      price: 80,
      subtitle: lang?.services.s1s,
      text: [lang?.services.s1t],
      image: serviceImg1,
    },
    {
      title: "Silver Service",
      price: 450,
      subtitle: lang?.services.s2s,
      text: [lang?.services.s2t],
      image: serviceImg2,
    },
    {
      title: "Golden Service",
      price: 850,
      subtitle: lang?.services.s3s,
      text: [lang?.services.s3t1, lang?.services.s3t2],
      image: serviceImg3,
    },
    {
      title: "Platinum service",
      price: "30*m2",
      subtitle: lang?.services.s4s,
      text: [lang?.services.s4t1, lang?.services.s4t2],
      image: serviceImg4,
    },
  ];
  const inPresenceServices = {
    title: lang?.services.presT,
    subtitle: lang?.services.presST,
    text: [lang?.services.presT1, lang?.services.presT2],
    buttonsContent: [
      {
        price: 200,
        dayPeriod: lang?.services.btn1,
        hour: 4,
        howManyHouse: 4,
        importantButton: false,
      },

      {
        price: 325,
        dayPeriod: lang?.services.btn2,
        hour: 7,
        howManyHouse: 7,
        importantButton: true,
      },
    ],
    footerText: lang?.services.foot,
  };

  return (
    <div>
      <div
        id="remoteService"
        className="flex h-full w-full columns-2 justify-center gap-8 px-12 pb-10 pt-40"
      >
        <div className="h-full lg:w-[60%]">
          <h1
            className={`${ebGaramond.className} mb-8 ml-4 leading-[100%] text-gialloTro [font-size:_clamp(1.5rem,3.5vw,3.5rem)]`}
          >
            <b className=" font-bold">{lang?.services.inostri}</b> <br />{" "}
            {lang?.services.inostri2}
          </h1>
          <div className="grid h-[80%] w-full items-center justify-items-center gap-4 md:grid-cols-2 lg:gap-8">
            {services.map((service) => {
              return (
                <ServiceModal
                  styles={styles}
                  key={service.title}
                  title={service.title}
                  price={service.price}
                  subtitle={service.subtitle}
                  text={service.text}
                  image={service.image}
                  handleClick={handleClick}
                  clicked={clicked}
                  setClicked={setClicked}
                />
              );
            })}
          </div>
        </div>

        <div className="hidden w-[30%] justify-center lg:flex">
          <Image
            src={whatWeOffer}
            alt="what we offer image"
            height={620}
            width={1200}
            className="rounded-3xl object-cover mix-blend-screen"
          ></Image>
        </div>
      </div>

      <div
        id="presenceService"
        className="flex w-full columns-2 flex-col items-center justify-around gap-24 px-12 py-36 lg:flex-row"
      >
        <div className="flex justify-center">
          <video
            controls
            width={920}
            className="aspect-video shadow-xl shadow-slate-900"
            poster="/img/videoPlaceholder.png"
          >
            <source src="/video/video1920.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col">
          <h1
            className={`${ebGaramond.className} ml-4 leading-[100%] text-gialloTro [font-size:_clamp(1.5rem,3.5vw,3.5rem)]`}
          >
            <b className=" font-bold">{lang?.services.inostri3}</b> <br />
            {lang?.services.inostri2}
          </h1>
          <CardServiceInPresence
            styles={styles}
            title={inPresenceServices.title}
            buttonsContent={inPresenceServices.buttonsContent}
            subtitle={inPresenceServices.subtitle}
            text={inPresenceServices.text}
            footerText={inPresenceServices.footerText}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

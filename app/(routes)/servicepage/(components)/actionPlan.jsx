import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import backgroundActionPlan from "@/public/img/backgroundActionPlan.png";
import useLang from "@/app/hooks/useLang";

const ActionPlan = ({ styles, windowWidth }) => {
  const {lang} = useLang()
  let counter = 0;
  let counterOuter = 0;
  const actionPlan = [
    {
      name: lang?.services.apn1,
      service: [
        {
          buttonName: lang?.services.apb1,
          text: lang?.services.apt1,
        },
        {
          buttonName: lang?.services.apb2,
          text: lang?.services.apt2,
        },
      ],
    },
    {
      name: lang?.services.apn2,
      service: [
        {
          buttonName: lang?.services.apb3,
          text: lang?.services.apt3,
        },
        {
          buttonName: lang?.services.apb4,
          text: lang?.services.apt4,
        },
        {
          buttonName: lang?.services.apb5,
          text: lang?.services.apt5,
        },
      ],
    },
    {
      name: lang?.services.apn3,
      service: [
        {
          buttonName: lang?.services.apb6,
          text: lang?.services.apt6,
        },
        {
          buttonName: lang?.services.apb7,
          text: lang?.services.apt7,
        },
      ],
    },
  ];

  return (
    <div className="relative h-full w-full">
      <Image
        src={backgroundActionPlan}
        alt="Immagine di background Traina"
        width={1051}
        height={830}
        className="absolute right-0 z-0 hidden aspect-auto h-full w-[45rem] lg:block"
      ></Image>
      <h1
        className={`${ebGaramond.className} relative z-10 mb-8 text-center leading-[100%] text-gialloTro [font-size:_clamp(2.5rem,3.5vw,3.5rem)] md:ml-20 md:text-start`}
      >
        <b className=" font-bold">Action plan</b> <br /> Con BM
      </h1>
      <div className="relative z-30 flex flex-col gap-4 rounded-e-[24px] bg-[#E6E4D9] md:ml-20 lg:w-[90%] lg:p-4 2xl:w-[70%]">
        {actionPlan.map((plan) => {
          counterOuter++;
          return (
            <div key={plan.name}>
              <div className="flex flex-col items-center text-slate-950 md:flex-row">
                <h1
                  className={`${ebGaramond.className} z-10 mb-8 text-center font-[600] text-[#13637E] [font-size:_clamp(1.3rem,1.5vw,1.5rem)] md:mb-0 md:w-[20rem] md:text-start`}
                >
                  {plan.name.toUpperCase()}
                </h1>
                <div className="flex w-full flex-col gap-4 md:ml-[-5rem]">
                  {plan.service.map((service) => {
                    counter++;
                    return (
                      <div
                        key={service.buttonName}
                        className={`flex flex-col gap-4 md:flex-row md:items-center`}
                      >
                        <div
                          className="z-10 mx-auto flex w-[20rem] justify-center md:mx-0 md:justify-end"
                          style={
                            windowWidth >= 1024
                              ? {
                                  marginLeft: `${counter * 50}px`,
                                  opacity: `${counterOuter === 1 ? counterOuter / 1.5 : counterOuter / 2.5}`,
                                }
                              : {
                                  opacity: `${counterOuter === 1 ? counterOuter / 1.5 : counterOuter / 2.5}`,
                                }
                          }
                        >
                          <div className="text-center md:min-w-52">
                            <Button1
                              name={service.buttonName}
                              textColor={"#E6E4D9"}
                              borderColor={""}
                              backgroundColor={"#13637E"}
                              type={"actionPlan"}
                            ></Button1>
                          </div>
                        </div>
                        <p className="z-10 mb-8 w-full px-8 md:mb-0 md:ml-0 md:w-1/2 md:px-4 lg:w-1/3">
                          {service.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {counterOuter === 3 ? (
                <></>
              ) : (
                <div className="z-10 mx-auto my-4 h-[2px] w-[90%] rounded-lg bg-[#D9D9D9]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActionPlan;

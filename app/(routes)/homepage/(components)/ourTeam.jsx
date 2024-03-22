import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import angelo from "@/public/img/angelo.svg";
import paolo from "@/public/img/paolo.svg";
import objective from "@/public/img/objective.svg";
import vision from "@/public/img/vision.svg";
import etica from "@/public/img/etica.svg";
import EndSection from "@/app/ui/components/endSection";
import useLang from "@/app/hooks/useLang";

const OurTeam = ({ styles, overed, handleOverOurTeam, handleLeaveOurTeam }) => {
  const { lang } = useLang();

  return (
    <>
      <h1
        className={`italic ${styles.h1CustomTroina} ${styles.colorBlue} ${ebGaramond.className}  mb-12 pt-32 text-center`}
      >
        Startup <span className={`${styles.colorYellow}`}>Team</span>
      </h1>

      <div className="flex w-full flex-wrap lg:grid lg:grid-cols-2">
        <div className="flex w-full flex-col items-center justify-end gap-8 p-10 sm:flex-row  lg:justify-end">
          <div className="ml-auto text-right sm:m-0">
            <h2
              className={`${styles.colorBlue} ${styles.h2Custom} ${ebGaramond.className} mb-2 font-bold leading-[1]`}
            >
              {lang?.homepage.nome1} <br /> {lang?.homepage.cogn1}
            </h2>
            <div className={`text-gray-900 ${ibmPlexSans.className} leading-7`}>
              <h3 className="text-[1.1rem] font-bold">
                {lang?.homepage.fondatore}
              </h3>
              <ul className=" font-[500]">
                <li>{lang?.homepage.anni}</li>
                <li>{lang?.homepage.job}</li>
                <li>{lang?.homepage.laurea}</li>
              </ul>
            </div>
          </div>
          <Image
            src={angelo}
            width={100}
            height={100}
            className="ml-auto w-[10rem] sm:m-0 sm:w-[14rem]"
            alt="location"
          ></Image>
        </div>

        <div className="flex w-full flex-col-reverse items-center justify-start gap-8 p-10 sm:flex-row  lg:justify-start">
          <Image
            src={paolo}
            width={100}
            height={100}
            className="mr-auto w-[10rem] sm:m-0 sm:w-[14rem]"
            alt="location"
          ></Image>
          <div className="mr-auto text-left sm:m-0">
            <h2
              className={`${styles.colorBlue} ${styles.h2Custom} ${ebGaramond.className} mb-2 font-bold leading-[1]`}
            >
              {lang?.homepage.nome2} <br /> {lang?.homepage.cogn2}
            </h2>
            <div className={`text-gray-900 ${ibmPlexSans.className} leading-7`}>
              <h3 className="text-[1.1rem] font-bold">
                {lang?.homepage.coFounder}
              </h3>
              <ul className=" font-[500]">
                <li>{lang?.homepage.anni2}</li>
                <li>{lang?.homepage.job2}</li>
                <li>{lang?.homepage.laurea2}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p
        className={`${ibmPlexSans.className} mt-20 px-[20vw] text-center text-[20px] leading-7 text-gray-900`}
      >
        {lang?.homepage.paragraph1}
        <br />
        {lang?.homepage.paragraph2}
        <br />
        <span className=" font-bold">{lang?.homepage.paragraph3}</span>
      </p>

      <div className="mt-20 flex w-full flex-wrap gap-10 pb-40 lg:grid lg:grid-cols-2 lg:gap-0">
        <div className="hidden sm:block">
          <div
            className={
              "relative mb-6 flex justify-center" +
              (overed === 0 ? " z-10" : "")
            }
          >
            <div
              onMouseOver={() => handleOverOurTeam(0)}
              onMouseLeave={handleLeaveOurTeam}
              className={`${styles.btnOurTeam} relative flex items-center justify-center`}
            >
              <Image
                src={objective}
                width={100}
                height={100}
                className="mr-2 inline w-12"
                alt="location"
              ></Image>
              <h1
                className={`${styles.colorBlue} ${styles.h3Custom} ${ibmPlexSans.className} inline font-semibold`}
              >
                {lang?.homepage.tit1}
              </h1>
              {overed === 0 ? (
                <div
                  className={`absolute left-[90%] top-0 w-[20rem] rounded-e-xl rounded-es-xl py-4 pe-4 pl-20 text-gray-900 ${styles.bgWhite}`}
                >
                  <p className={`${styles.opacityAnim}`}>
                    {lang?.homepage.missp1} <b>{lang?.homepage.missp2}</b> {lang?.homepage.missp3}
                    <br /> <br /> {lang?.homepage.missp1} <b>{lang?.homepage.missp4}</b> {lang?.homepage.missp5}
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div
            className={
              "relative mb-6 ml-12 flex justify-center" +
              (overed === 1 ? " z-10" : "")
            }
          >
            <div
              onMouseOver={() => handleOverOurTeam(1)}
              onMouseLeave={handleLeaveOurTeam}
              className={`${styles.btnOurTeam} relative flex items-center justify-center`}
            >
              <Image
                src={vision}
                width={100}
                height={100}
                className="mr-2 inline w-12"
                alt="location"
              ></Image>
              <h1
                className={`${styles.colorBlue} ${styles.h3Custom} ${ibmPlexSans.className} inline font-semibold`}
              >
                {lang?.homepage.tit2}
              </h1>
              {overed === 1 ? (
                <div
                  className={`absolute left-[90%] top-0 h-full w-[20rem] rounded-e-xl py-4 pe-4 pl-20 text-gray-900 ${styles.bgWhite} `}
                >
                  <p className={`${styles.opacityAnim}`}>
                    <b>{lang?.homepage.vis1}</b> {lang?.homepage.vis2}
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div
            className={
              "relative ml-24 flex justify-center" +
              (overed === 2 ? " z-10" : "")
            }
          >
            <div
              onMouseOver={() => handleOverOurTeam(2)}
              onMouseLeave={handleLeaveOurTeam}
              className={`${styles.btnOurTeam} relative flex items-center justify-center`}
            >
              <Image
                src={etica}
                width={100}
                height={100}
                className="mr-2 inline w-12"
                alt="location"
              ></Image>
              <h1
                className={`${styles.colorBlue} ${styles.h3Custom} ${ibmPlexSans.className} inline font-semibold`}
              >
                {lang?.homepage.tit3}
              </h1>
              {overed === 2 ? (
                <div
                  className={`absolute left-[90%] top-0 h-full w-[20rem] rounded-e-xl py-1 pe-4 pl-20 text-gray-900 lg:py-2 ${styles.bgWhite}`}
                >
                  <p className={`${styles.opacityAnim}`}>
                  {lang?.homepage.etica1} <b>{lang?.homepage.etica2}</b>
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <p
          className={`${ebGaramond.className} font-semibold italic ${styles.colorBlue} ${styles.h3Custom} mx-auto w-[80%] px-8 lg:mx-0 lg:pe-32`}
        >
          {lang?.homepage.riflettori1} <br />{lang?.homepage.riflettori2}
        </p>
      </div>
      <div className="rotate-180">
        <EndSection styles={styles} />
      </div>
    </>
  );
};

export default OurTeam;

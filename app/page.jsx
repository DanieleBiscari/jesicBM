"use client";
import { useRef, useState } from "react";
import { firstLetterUpper } from "./lib/bmlib";
import Image from "next/image";
import logo from "@/public/img/logo.svg";
import search from "@/public/img/arrowDown.svg";
import searchUp from "@/public/img/arrowUp.svg";
import closeImg from "@/public/img/close.svg";
import styles from "@/app/styles/landing.module.css";
import { ibmPlexSans, roboto } from "@/app/ui/fonts";
// import BannerLanding from "./ui/components/bannerLanding";
import Input1 from "./ui/components/input1";
import Button1 from "./ui/components/button1";
import CookieModal from "./ui/components/cookieModal";

export default function LandingPage() {
  const cities = ["troina"];
  const infoModal = {
    title: "DIAMO VALORE ALLA TUA PRIVACY",
    text: 'Questo sito web utilizza cookie essenziali per offrire un\'esperienza piacevole e garantirne il corretto funzionamento e non possono essere disattivati. I cookie opzionali vengono utilizzati per migliorare la pagina con delle analisi, facendo clic su "accetto tutto" acconsenti l’utilizzo di questi cookie.',
    buttonLeftText: "accetto solo essenziali",
    buttonRightText: "accetto tutto",
    urlToMore:
      "https://www.cookiebot.com/en/privacy-policy-generator-gdpr/?utm_source=google&utm_medium=cpc&utm_term=&utm_campaign=cb_dm_ww_eng_dsa_search_prf_lead_n_ca&utm_ad_group=ww-en-blog-en&gclid=Cj0KCQiAqsitBhDlARIsAGMR1Rj0mPHYgA3qCw_Rir3XCxR5jsW26qWLk0Ok7Tz-t_Z0aFhFzgsAe14aAgcHEALw_wcB",
  };

  const searchButtonRef = useRef();
  const [suggestionArray, setSuggestionArray] = useState([]);
  const [toPageUi, setToPageUi] = useState(false);
  const [seeCookieModal, setSeeCookieModal] = useState(true);

  function handleSearchClick() {
    if (suggestionArray.length === 0) {
      const newSuggestionArray = [];
      cities.map((city) => {
        newSuggestionArray.push(city);
      });
      setSuggestionArray(newSuggestionArray);
    } else {
      setSuggestionArray([]);
    }
  }

  function handleSuggestionShow() {
    const newSuggestionArray = [];
    cities.map((city) => {
      if (city.includes(searchButtonRef.current.value.toLowerCase())) {
        newSuggestionArray.push(city);
      }
    });
    setSuggestionArray(newSuggestionArray);
  }

  function handleSuggestionClick(suggestion) {
    searchButtonRef.current.value = firstLetterUpper(suggestion);
    setSuggestionArray([]);
    handleSuggestionHide();
  }

  function handleSuggestionHide() {
    // searchButtonRef.current.classList.remove("border-red-600");
    // searchButtonRef.current.classList.remove("border-green-600");
    // searchButtonRef.current.classList.remove("border-2");

    setTimeout(() => {
      let founded = false;
      cities.map((city) => {
        if (
          searchButtonRef.current.value === firstLetterUpper(city) ||
          searchButtonRef.current.value === city
        ) {
          founded = true;
        }
      });
      if (founded) {
        // searchButtonRef.current.classList.add("border-green-600");
        // searchButtonRef.current.classList.add("border-2");
        setToPageUi(true);
      } else if (searchButtonRef.current.value) {
        searchButtonRef.current.classList.add("border-red-600");
        searchButtonRef.current.classList.add("border-2");
        searchButtonRef.current.value = "";
      } else {
      }

      setSuggestionArray([]);
    }, 100);
  }

  return (
    <section className=" flex h-screen w-screen">
      <div
        className={`${styles.bgLanding} flex w-screen flex-col justify-between md:w-1/2`}
      >
        <div className=" ml-8 mt-8 flex w-40 items-center justify-center gap-2">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h3 className={`${ibmPlexSans.className} leading-4`}>
            Attrazione Investimenti
          </h3>
        </div>

        <div className="mb-[50vh] mt-8">
          <div className="relative flex flex-col items-center font-bold md:ml-[10%] md:items-start">
            <h1
              className={
                ibmPlexSans.className +
                " mb-8 text-center text-4xl md:text-start"
              }
            >
              Dove vorresti <br /> andare?
            </h1>
            <div
              className={`${toPageUi ? "hidden" : "flex"} w-full justify-center md:justify-start`}
            >
              <Input1
                urlImg={suggestionArray.length != 0 ? searchUp : search}
                searchEffect={handleSearchClick}
                inputRef={searchButtonRef}
                placeholder={"Seleziona un comune"}
                onChangeEffect={handleSuggestionShow}
                onClickEffect={handleSuggestionShow}
                onBlurEffect={handleSuggestionHide}
                suggestionArray={suggestionArray}
              ></Input1>
              {suggestionArray ? (
                <div className="absolute top-[100%] max-h-40 w-1/2 min-w-52 overflow-y-auto text-slate-800">
                  {suggestionArray.map((suggestion, id) => {
                    return (
                      <div
                        onClick={() => handleSuggestionClick(suggestion)}
                        key={id}
                        className={`${styles.suggestion} cursor-pointer bg-gray-400 bg-opacity-60 p-2 text-biancoTro ${suggestionArray.length - 1 === id ? " rounded-b-2xl" : ""}`}
                      >
                        {firstLetterUpper(suggestion)}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className={`${toPageUi ? "flex" : "hidden"} w-full flex-wrap items-center justify-center gap-4 opacity-90 md:justify-start`}
            >
              <div className="flex rounded-2xl">
                <Image
                  src={closeImg}
                  alt="search image"
                  width={50}
                  height={50}
                  className="cursor-pointer overflow-hidden rounded-s-2xl bg-gray-400 bg-opacity-60 p-3"
                  onClick={() => setToPageUi(false)}
                />
                <div className="flex w-full items-center overflow-hidden rounded-e-2xl bg-gray-400  bg-opacity-60">
                  <div className="">{searchButtonRef.current?.value}</div>
                </div>
              </div>
              <div>
                <Button1
                  name={"Vai alla pagina"}
                  borderColor={"#F5A400"}
                  textColor={"#F5A400"}
                  url={"/homepage"}
                ></Button1>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mb-12">
          <BannerLanding fromWhat={"landingPage"} />
        </div> */}
      </div>

      <div
        className={
          styles.bgLandingRight +
          " hidden w-8/12 items-end justify-center md:flex"
        }
      >
        <p
          className={`${roboto.className} mb-20 w-[80%] text-justify antialiased`}
        >
          Investire nella riqualificazione dei Sobborghi Italiani è una missione
          per noi molto importante. Non solo per salvaguardare il nostro
          patrimonio culturale, ma per creare comunità e restituire il loro
          fascino ai nostri centri storici.
        </p>
      </div>
      {seeCookieModal ? (
        <div className="absolute h-full w-full bg-slate-300 bg-opacity-30 z-0">
          <CookieModal
            title={infoModal.title}
            text={infoModal.text}
            buttonLeftText={infoModal.buttonLeftText}
            buttonRightText={infoModal.buttonRightText}
            urlToMore={infoModal.urlToMore}
            setSeeCookieModal={setSeeCookieModal}
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

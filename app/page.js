"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { firstLetterUpper } from "./lib/bmlib";
import logo from "@/public/img/logo.svg";
import search from "@/public/img/search.svg";
import europa from "@/public/img/europe.png";
import italia from "@/public/img/italia.png";
import sicilia from "@/public/img/sicilia.png";
import troina from "@/public/img/troina.png";
import styles from '@/app/styles/landing.module.css';
import { ibmPlexSans, roboto } from '@/app/ui/fonts';


export default function Home() {
  const cities = ["troina", "marina", "cugina", "sarina"];
  const router = useRouter();
  const searchButtonRef = useRef();
  const [suggestionArray, setSuggestionArray] = useState([]);

  function handleSearchClick(){
    let founded = false;
    cities.map((city) =>{
      if(searchButtonRef.current.value === city){
        founded = true;
        router.replace("/homepage");
      }
    })
    if(!founded){
      searchButtonRef.current.classList.add("border-red-600");
      searchButtonRef.current.classList.add("border-2"); 
    } 
  }

  function handleSuggestionShow(){
    const newSuggestionArray = []
    cities.map((city) => {
      if(city.includes(searchButtonRef.current.value.toLowerCase()) ){
        newSuggestionArray.push(city)
      }
    })
    setSuggestionArray(newSuggestionArray)
  }

  function handleSuggestionClick(suggestion){
    searchButtonRef.current.value = firstLetterUpper(suggestion);
  }

  function handleSuggestionHide(){
    searchButtonRef.current.classList.remove('border-red-600');
    searchButtonRef.current.classList.remove('border-green-600');
    searchButtonRef.current.classList.remove('border-2');
    
    setTimeout(() => {
      let founded = false;
      cities.map((city) => {
        if ((searchButtonRef.current.value === firstLetterUpper(city)) || (searchButtonRef.current.value === city)) {
          founded = true;
        }
      });
      if (founded) {
        searchButtonRef.current.classList.add('border-green-600');
        searchButtonRef.current.classList.add('border-2');
      } else {
        searchButtonRef.current.classList.add('border-red-600');
        searchButtonRef.current.classList.add('border-2');
        searchButtonRef.current.value = ""
      }
      setSuggestionArray([]);
    }, 100)
  }


  return(
    <section className=" flex h-screen w-screen">
        <div className=" w-screen flex flex-col justify-between md:w-1/2">
            <div className=" flex justify-center items-center gap-2 w-40 mt-8 ml-8 ">
                <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                />
                <h3 className= {`${ibmPlexSans.className} leading-4`}>Attrazione Investimenti</h3>
            </div>  

            <div>
                <div className="flex flex-col items-center md:items-start md:ml-[10%] font-bold relative">
                  <h1 className={ibmPlexSans.className + " mb-5 text-4xl text-center md:text-start"}>Dove vorresti <br/> investire?</h1>
                  <div className=" flex rounded-2xl h-10 w-[50%] min-w-52">
                      <Image
                      src={search}
                      alt="search image"
                      width={50}
                      height={50}
                      className="rounded-s-2xl overflow-hidden bg-gray-400 bg-opacity-60 p-2 cursor-pointer"
                      onClick={handleSearchClick}
                      />
                      <input
                      type="text"
                      className="rounded-e-2xl overflow-hidden bg-gray-400 bg-opacity-60 w-full pl-2"
                      ref={searchButtonRef}
                      placeholder="e.g. Troina"
                      onChange={handleSuggestionShow}
                      onClick={handleSuggestionShow}
                      onBlur={handleSuggestionHide}
                      />
                  </div>
                {suggestionArray
                      ?
                      <div className="pl-11 pr-3 w-1/2 min-w-52 text-slate-800 max-h-40 overflow-y-auto absolute top-[101%]">
                        {suggestionArray.map((suggestion, id) => {
                          return (<div onClick={() => handleSuggestionClick(suggestion)} 
                                       key={id} 
                                       className={`${styles.suggestion} p-2 cursor-pointer bg-white`}>
                                          {firstLetterUpper(suggestion)}
                                  </div>)
                        })} 
                      </div>
                      :
                      <></>
                }
                </div>
            </div>

            <div className="flex justify-evenly mb-12 flex-wrap">
                <Image
                src={europa}
                alt="bottom image 1"
                width={108}
                className="w-24"
                />
                <Image
                src={italia}
                alt="bottom image 2"
                width={51}
                className="w-14"
                />
                <Image
                src={sicilia}
                alt="bottom image 3"
                width={42}
                className="w-12"
                />
                <Image
                src={troina}
                alt="bottom image 4"
                width={38}
                className="w-10"
                />
            </div>
        </div>

        <div className={styles.bgLandingRight + " hidden w-8/12 justify-center items-end md:flex"}>
            <p className={`${roboto.className} mb-20 mx-16 text-justify antialiased`}>Investire nella riqualificazione dei Sobborghi Italiani è una missione per noi molto importante. 
            Non solo per salvaguardare il nostro patrimonio culturale, ma per creare comunità e restituire il loro fascino ai nostri centri storici.
            </p>
        </div>

    </section>
  )
}

import Image from "next/image";

import logo from "@/public/img/logo.svg"
import search from "@/public/img/search.svg"
import europa from "@/public/img/europe.png"
import italia from "@/public/img/italia.png"
import sicilia from "@/public/img/sicilia.png"
import troina from "@/public/img/troina.png"

import styles from '@/app/styles/landing.module.css';

import { ibmPlexSans, roboto } from '@/app/ui/fonts'

export default function Page(){
    return(
        <section className=" flex h-screen w-screen">
            <div className=" w-screen flex flex-col justify-between md:w-1/2">
                <div className=" flex justify-center items-center gap-2 w-40 mt-8 ml-8">
                    <Image
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    />
                    <h3 className= {`${ibmPlexSans.className} leading-4`}>Attrazione Investimenti</h3>
                </div>  

                <div className=" flex flex-col items-center md:items-start gap-5 md:ml-[10%] font-bold">
                    <h1 className={ibmPlexSans.className + " text-4xl text-center md:text-start"}>Dove vorresti <br/> investire?</h1>
                    <div className=" flex rounded-2xl h-10 w-[50%] min-w-52">
                        <Image
                        src={search}
                        alt="search image"
                        width={50}
                        height={50}
                        className="rounded-s-2xl overflow-hidden bg-gray-400 bg-opacity-60 p-2"
                        />
                        <input 
                        type="text"
                        className="rounded-e-2xl overflow-hidden bg-gray-400 bg-opacity-60 w-full"
                        />
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
import Image from "next/image";

import dummyImage from "@/public/img/dummyImage.jpg"
import logo from "@/public/img/logo.svg"
import search from "@/public/img/search.svg"

import styles from '@/app/styles/landing.module.css';


export default function Page(){
    return(
        <section className=" flex h-screen w-screen">
            <div className=" flex flex-col justify-between w-1/2">
                <div className=" flex justify-center items-center gap-2 w-40 mt-8 ml-8">
                    <Image
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    />
                    <h3 className=" leading-4">Attrazione Investimenti</h3>
                </div>  

                <div className=" flex flex-col gap-5 ml-[10%]">
                    <h1 className=" text-5xl">Dove vorresti <br/> investire?</h1>
                    <div className=" flex rounded-2xl w-60 h-10">
                        <Image
                        src={search}
                        alt="search image"
                        width={50}
                        height={50}
                        className="rounded-s-2xl overflow-hidden bg-gray-400 bg-opacity-60 p-2"
                        />
                        <input 
                        type="text"
                        className="rounded-e-2xl overflow-hidden bg-gray-400 bg-opacity-60"
                        />
                    </div>
                </div>
                
                <div className="flex justify-center gap-4 mb-5 flex-wrap">
                    <Image
                    src={dummyImage}
                    alt="bottom image 1"
                    width={100}
                    height={100}
                    />
                    <Image
                    src={dummyImage}
                    alt="bottom image 2"
                    width={100}
                    height={100}
                    />
                    <Image
                    src={dummyImage}
                    alt="bottom image 3"
                    width={100}
                    height={100}
                    />
                    <Image
                    src={dummyImage}
                    alt="bottom image 4"
                    width={100}
                    height={100}
                    />
                </div>
            </div>

            <div className={styles.bgLandingRight + " w-8/12 flex justify-center items-end"}>
                <p className=" mb-20 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, veniam!</p>
            </div>

        </section>
    )
}
"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { firstLetterUpper } from "./lib/bmlib";
import Image from "next/image";
import logo from "@/public/img/logo.svg";
import search from "@/public/img/arrowDown.svg";
import styles from "@/app/styles/landing.module.css";
import { ibmPlexSans, roboto } from "@/app/ui/fonts";
import BannerLanding from "./ui/components/bannerLanding";
import Input1 from "./ui/components/input1";

export default function LandingPage() {
  const cities = ["troina", "marina", "cugina", "sarina"];
  const router = useRouter();
  const searchButtonRef = useRef();
  const [suggestionArray, setSuggestionArray] = useState([]);

  function handleSearchClick() {
    let founded = false;
    cities.map((city) => {
      if (
        searchButtonRef.current.value === firstLetterUpper(city) ||
        searchButtonRef.current.value === city
      ) {
        founded = true;
        router.replace("/homepage");
      }
    });
    if (!founded) {
      searchButtonRef.current.classList.add("border-red-600");
      searchButtonRef.current.classList.add("border-2");
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
  }

  function handleSuggestionHide() {
    searchButtonRef.current.classList.remove("border-red-600");
    searchButtonRef.current.classList.remove("border-green-600");
    searchButtonRef.current.classList.remove("border-2");

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
        searchButtonRef.current.classList.add("border-green-600");
        searchButtonRef.current.classList.add("border-2");
      } else {
        searchButtonRef.current.classList.add("border-red-600");
        searchButtonRef.current.classList.add("border-2");
        searchButtonRef.current.value = "";
      }
      setSuggestionArray([]);
    }, 100);
  }

  return (
    <div className=" flex h-10 w-[50%] min-w-52 rounded-2xl">
      <Image
        src={search}
        alt="search image"
        width={50}
        height={50}
        className="cursor-pointer overflow-hidden rounded-s-2xl bg-gray-400 bg-opacity-60 p-2"
        onClick={handleSearchClick}
      />
      <input
        type="text"
        className="w-full overflow-hidden rounded-e-2xl bg-gray-400 bg-opacity-60 pl-2"
        ref={searchButtonRef}
        placeholder="e.g. Troina"
        onChange={handleSuggestionShow}
        onClick={handleSuggestionShow}
        onBlur={handleSuggestionHide}
      />
    </div>
  );
}

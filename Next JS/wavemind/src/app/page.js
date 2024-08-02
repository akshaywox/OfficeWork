import Arrow from "@/components/Arrow";
import Header from "@/components/Header";
import Image from "next/image";
import Hero from "@/components/Hero";
import BasicsOfMotion from "@/frameMotion/BasicsOfMotion";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <>
    {/* <BasicsOfMotion/> */}
    <Header/>
    <Hero/>
    <HeroVideo/>
    </>
  );
}

import Image from "next/image";
import Hero from "./Component/Hero";
import Guide from "./Component/Guide";
import Camp from "./Component/Camp";
import Features from "./Component/Features";
import GetApp from "./Component/GetApp";
export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}

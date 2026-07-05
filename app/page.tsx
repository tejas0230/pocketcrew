import Image from "next/image";
import PocketCrewContainer from "@/components/custom/PocketCrewContainer";
import Navbar from "@/components/custom/Navbar";
import Hero from "@/components/custom/Hero";
import TheSolution from "@/components/custom/TheSolution";
import SeeInAction from "@/components/custom/SeeInAction";
import CTA from "@/components/custom/CTA";
import FAQ from "@/components/custom/FAQ";
import Footer from "@/components/custom/Footer";
export default function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <TheSolution />
        <SeeInAction />
        {/* <CTA /> */}
        {/* <FAQ /> */}
        {/* <Footer /> */}
      </>
  );
}

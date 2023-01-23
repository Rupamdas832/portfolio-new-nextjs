import { Inter } from "@next/font/google";
import Head from "next/head";
import Footer from "../components/Footer";
import AboutSection from "../components/indexPage/AboutSection/AboutSection";
import HeroSection from "../components/indexPage/HeroSection/HeroSection";
import PersonalProjectSection from "../components/indexPage/PersonalProjectSection/PersonalProjectSection";
import ProjectHorizontalListSection from "../components/indexPage/ProjectHorizontalListSection/ProjectHorizontalListSection";
import WorkExperienceSection from "../components/indexPage/WorkExperienceSection/WorkExperienceSection";
import SectionDivider from "../components/SectionDivider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rupam Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />
        <ProjectHorizontalListSection />
        <WorkExperienceSection />
        <SectionDivider />
        <PersonalProjectSection />
        <Footer />
      </div>
    </>
  );
}

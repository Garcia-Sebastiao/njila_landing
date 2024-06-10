import { AboutUs } from "./components/AboutUs/AboutUs";
import { Banner } from "./components/Banner/Banner";
import { Intro } from "./components/Intro/Intro";
import { OurEssence } from "./components/OurEssence/OurEssence";
import { OurTeam } from "./components/OurTeam/OurTeam";
import { Partners } from "./components/Partners/Partners";
import { Portfolio } from "./components/Portfolio/Portfolio";

export function HomeView() {
  return (
    <>
      <Banner />
      <Intro />
      <div className="w-full flex flex-col mt-40 gap-y-40">
        <Partners />
        <AboutUs />
        <OurEssence />
        <Portfolio />
        <OurTeam />
      </div>
    </>
  );
}

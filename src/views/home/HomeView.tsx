import { AboutUs } from "./components/AboutUs/AboutUs";
import { Banner } from "./components/Banner/Banner";
import { Contacts } from "./components/Contacts/Contacts";
import { Intro } from "./components/Intro/Intro";
import { OurEssence } from "./components/OurEssence/OurEssence";
import { OurTeam } from "./components/OurTeam/OurTeam";
import { Partners } from "./components/Partners/Partners";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";

export function HomeView() {
  return (
    <>
      <Banner />
      <Intro />
      <div className="w-full flex flex-col mt-10 md:mt-32 lg:mt-40 gap-y-32 lg:gap-y-32">
        {/* <Partners /> */}
        <AboutUs />
        <OurEssence />
        <Portfolio />
        <OurTeam />
        <Services />
        <Contacts />
      </div>
    </>
  );
}

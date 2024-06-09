import { AboutUs } from "./components/AboutUs/AboutUs";
import { Banner } from "./components/Banner/Banner";
import { Intro } from "./components/Intro/Intro";
import { Partners } from "./components/Partners/Partners";

export function HomeView() {
  return (
    <>
      <Banner />
      <Intro />
      <div className="w-full flex flex-col mt-40 gap-y-40">
        <Partners />
        <AboutUs />
      </div>
    </>
  );
}

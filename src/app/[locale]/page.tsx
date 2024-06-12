"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { HomeView } from "@/views/home/HomeView";
import { BannerIllustration } from "@/assets/illustrations/BannerIllustration";
import { FullLogo } from "@/assets/FullLogo";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 6000);
  // });

  return (
    // <>
    //   {isLoading ? (
    //     <div className="w-full transition-all loader fixed top-0 left-0 z-50 bg-white h-screen flex justify-center items-center">
    //       {FullLogo}
    //     </div>
    //   ) : (
    //     <>
    //       <div className="hidden lg:flex absolute -z-10 top-0 left-0">
    //         {BannerIllustration}
    //       </div>
    //       <HomeView />
    //     </>
    //   )}
    // </>

    <>
      <div className="hidden lg:flex absolute -z-10 top-0 left-0">
        {BannerIllustration}
      </div>
      <HomeView />
    </>
  );
}

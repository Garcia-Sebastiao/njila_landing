"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HomeView } from "@/views/home/HomeView";
import { BannerIllustration } from "@/assets/illustrations/BannerIllustration";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="hidden lg:flex absolute -z-10 top-0 left-0">
        {BannerIllustration}
      </div>
      <HomeView />
    </>
  );
}

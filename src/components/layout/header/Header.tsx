"use client";
import Link from "next/link";
import { NavLinks } from "./utils";
import { useTranslations } from "next-intl";
import { FullLogo } from "@/assets/FullLogo";
import { useEffect, useState } from "react";
import { Container } from "../container/Container";

export function Header() {
  const translate = useTranslations("app");
  const [active, setActive] = useState<string>(NavLinks[0]);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [headerFixed, setHEaderFixed] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setHEaderFixed(true);
        } else {
          setHEaderFixed(false);
        }
      });
    }
  }, []);

  return (
    <header
      className={`w-full ${
        headerFixed &&
        "bg-[#ffffff70] !py-8 backdrop-blur-xl z-40 fixed top-0 left-0"
      } transition-all py-14`}
    >
      <Container className="flex items-center justify-between">
        <Link href="#">{FullLogo}</Link>

        <button
          onClick={() => setOpenMenu(true)}
          className="lg:hidden flex flex-col gap-y-2 w-10 items-end"
        >
          <div className="w-full h-1 bg-textColor rounded-lg" />
          <div className="w-[80%] h-1 bg-textColor rounded-lg" />
          <div className="w-[65%] h-1 bg-textColor rounded-lg" />
        </button>

        <nav
          className={`${
            openMenu && "!flex"
          } hidden lg:flex fixed z-50 top-0 left-0 bg-blueOcean shadow-xl lg:shadow-none lg:bg-transparent w-full h-screen lg:w-auto lg:h-auto lg:relative`}
        >
          <ul className="flex relative w-full h-full lg:w-auto  flex-col lg:flex-row items-center justify-center lg:justify-normal gap-x-8">
            {NavLinks.map((item) => (
              <Link
                key={item}
                onClick={() => {
                  setOpenMenu(false);
                  setActive(item);
                }}
                className={`p-[10px] rounded-md hover:bg-orangeFruit transition-all hover:text-orangeFruit !bg-opacity-20 font-medium text-white lg:text-textColor text-md text-md ${
                  active == item && "!text-orangeFruit bg-orangeFruit "
                }`}
                href={`#${item}`}
              >
                {translate(`header.nav.${item}`)}
              </Link>
            ))}

            <div
              onClick={() => setOpenMenu(false)}
              aria-label="Close Button"
              className="absolute lg:hidden cursor-pointer top-10 right-10"
            >
              <div className="relative">
                <div className="w-1 h-10 bg-white rounded-xl absolute rotate-45" />
                <div className="w-1 h-10 bg-white rounded-xl -rotate-45" />
              </div>
            </div>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

"use client";

import Link from "next/link";
import { NavLinks } from "./utils";
import { useTranslations } from "next-intl";
import { FullLogo } from "@/assets/FullLogo";
import { useState } from "react";

export function Header() {
  const translate = useTranslations("app");
  const [active, setActive] = useState<string>(NavLinks[0]);

  return (
    <header className="w-full sticky">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="#">{FullLogo}</Link>

        <nav className="flex">
          <ul className="flex items-center py-8 gap-x-8">
            {NavLinks.map((item) => (
              <Link
                key={item}
                onClick={() => setActive(item)}
                className={`p-[10px] rounded-md hover:bg-orangeFruit transition-all hover:text-orangeFruit !bg-opacity-20 font-medium text-textColor text-md text-md ${
                  active == item && "!text-orangeFruit bg-orangeFruit "
                }`}
                href={`#${item}`}
              >
                {translate(`header.nav.${item}`)}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

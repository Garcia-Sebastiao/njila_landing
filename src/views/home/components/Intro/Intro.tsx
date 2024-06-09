import { ChevronDown } from "@/assets/icons/ChevronDown";
import Link from "next/link";
import styles from "./styles.module.css";
import { BannerAsset } from "@/assets/images/Banner/BannerAsset";
import { useTranslations } from "next-intl";
import { IntroImage1 } from "./assets/IntroImage1";
import { IntroImage2 } from "./assets/IntroImage2";

export function Intro() {
  const translate = useTranslations("app");

  return (
    <div className={styles.intro}>
      <div className="absolute flex flex-col items-center gap-y-6 left-1/2 ml-[6px] -top-4 -translate-x-1/2">
        <span className="text-orangeFruit font-medium">
          {translate("intro.link")}
        </span>
        <Link
          href="#"
          className="bg-white rounded-full flex justify-center items-center p-6 "
        >
          {ChevronDown}
        </Link>
      </div>

      <div className="w-full mx-auto items-center  gap-x-10 flex pt-32 justify-center">
        <div>{IntroImage2}</div>
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="text-white capitalize max-w-[43rem] leading-relaxed font-black text-5xl text-center">
            {translate("intro.title")}
          </h2>

          <p className="text-white max-w-xl text-2xl text-center">
            {translate("intro.label")}
          </p>
        </div>
        <div>{IntroImage1}</div>
      </div>
    </div>
  );
}

import { ChevronDown } from "@/assets/icons/ChevronDown";
import Link from "next/link";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import { IntroImage1 } from "./assets/IntroImage1";
import { IntroImage2 } from "./assets/IntroImage2";
import { Container } from "@/components/layout/container/Container";

export function Intro() {
  const translate = useTranslations("app");

  return (
    <div className={styles.intro}>
      <div className="absolute flex flex-col items-center gap-y-6 left-1/2 ml-[6px] top-32 md:top-4 lg:-top-4 -translate-x-1/2">
        <span className="text-orangeFruit hidden lg:block font-medium">
          {translate("intro.link")}
        </span>
        <Link
          data-aos="fade-up"
          href="#"
          className="bg-white rounded-full flex justify-center items-center p-6 "
        >
          <div className="flex justify-center items-center w-4 md:w-auto h-4 md:h-auto">
            {ChevronDown}
          </div>
        </Link>
      </div>

      <Container className="w-full mx-auto items-center  gap-x-10 flex pt-0 lg:pt-32 justify-center">
        <div className="hidden lg:block" data-aos="fade-left">
          {IntroImage2}
        </div>
        <div data-aos="fade-up" className="flex flex-col items-center gap-y-4">
          <h2 className="text-white capitalize max-w-[43rem] leading-relaxed font-black text-3xl lg:text-5xl text-center">
            {translate("intro.title")}
          </h2>

          <p className="text-white max-w-xl text-lg lg:text-2xl text-center">
            {translate("intro.label")}
          </p>
        </div>
        <div className="hidden lg:block" data-aos="fade-right">
          {IntroImage1}
        </div>
      </Container>
    </div>
  );
}

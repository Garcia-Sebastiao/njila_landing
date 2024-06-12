import { AboutUsIllustration } from "@/assets/illustrations/AboutUsIllustration";
import { Container } from "@/components/layout/container/Container";
import { useTranslations } from "next-intl";
import AboutImage from "./Frame 69.svg";
import Image from "next/image";

export function AboutUs() {
  const translate = useTranslations("app");
  return (
    <Container className="flex flex-col lg:flex-row items-center gap-y-16 gap-x-32">
      <Image data-aos="fade-right" src={AboutImage} alt="" />

      <div data-aos="fade-left" className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-3">
          <span className="text-2xl font-black text-orangeFruit">
            {translate("about-us.title.span")}
          </span>

          <h3 className="text-4xl max-w-[41rem] font-black">
            {translate("about-us.title.label.label")}
            <span className="font-black text-blueOcean">
              {translate("about-us.title.label.passion")}
            </span>
            <span className="font-black">
              {translate("about-us.title.label.for")}
            </span>
            <span className="font-black text-purpleColor">
              {translate("about-us.title.label.creativity")}
            </span>
            <span className="font-black">
              {translate("about-us.title.label.and")}
            </span>
            <span className="font-black text-orangeFruit">
              {translate("about-us.title.label.innovation")}
            </span>
          </h3>
        </div>

        <p className="max-w-2xl text-xl text-gray-400">
          {translate("about-us.label1")}
        </p>

        <p className="max-w-2xl text-xl text-gray-400">
          {translate("about-us.label2")}
        </p>
      </div>
    </Container>
  );
}

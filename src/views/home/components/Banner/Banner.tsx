import { MobilePath } from "@/assets/illustrations/MobilePath";
import { BannerImage } from "@/assets/images/Banner/BannerImage";
import { Container } from "@/components/layout/container/Container";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Banner() {
  const translate = useTranslations("app");

  return (
    <Container id="home" className="w-full flex-col lg:flex-row items-center lg:items-start lg:pt-24 flex relative justify-between container mx-auto h-screen">
      <div className="flex flex-col items-center lg:items-start gap-y-6 lg:pt-32">
        <h1
          data-aos="fade-right"
          className="text-4xl lg:text-6xl text-center lg:text-left font-black"
        >
          <span className="font-black text-textColor">
            {translate("banner.title.span1")}
          </span>
          <span className="font-black text-blueOcean">
            {translate("banner.title.span2")}
          </span>
          <span className="font-black text-orangeFruit">
            {translate("banner.title.span3")}
          </span>
        </h1>

        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-lg lg:text-2xl text-center lg:text-left max-w-lg"
        >
          {translate("banner.label")}
        </p>

        {/* <Link
          className="px-12 py-6 text-lg mt-4 rounded-2xl bg-purpleColor text-white font-medium"
          href="#"
        >
          {translate("banner.read-more")}
        </Link> */}
      </div>

      <div className="relative flex -mt-28 lg:-mt-14">
        <div data-aos="fade-right" className="p-2 lg:p-4 absolute items-center bottom-80 lg:bottom-44 -left-0 md:-left-32 lg:left-0 border pr-10 lg:pr-20 border-[#ffffff70] rounded-3xl z-10 bg-[#370C7532]  backdrop-blur-sm flex gap-x-4">
          <div className="w-6 lg:w-14 h-6 lg:h-14 bg-[#D6BAFF] border border-white rounded-full" />

          <div className="flex flex-col">
            <h4 className="text-md lg:text-2xl font-bold text-orangeFruit">
              {translate("banner.floats.innovation.title")}
            </h4>

            <p className="text-white">
              {translate("banner.floats.innovation.label")}
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="w-[22rem] lg:w-full flex">
          {BannerImage}
        </div>

        <div
          data-aos="fade-left"
          className="p-2 lg:p-4 absolute items-center top-80 lg:top-1/2 right-0 md:-right-32 lg:-right-20 border pr-10 md:pr-20 border-[#ffffff70] rounded-3xl bg-[#1883E964]  backdrop-blur-sm flex gap-x-4"
        >
          <div className="w-6 lg:w-14 h-6 lg:h-14 bg-[#D6BAFF] border border-white rounded-full" />

          <div className="flex flex-col">
            <h4 className="text-md lg:text-2xl font-bold text-[#FFFFFF53]">
              {translate("banner.floats.creativity.title")}
            </h4>

            <p className="text-white">
              {translate("banner.floats.creativity.label")}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden absolute bottom-40 -translate-x-1/2 left-1/2 w-[26rem] -z-10 md:w-auto h-[40rem] lg:h-[36rem] flex">
        {MobilePath}
      </div>
    </Container>
  );
}

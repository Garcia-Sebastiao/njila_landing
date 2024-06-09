import { BannerImage } from "@/assets/images/Banner/BannerImage";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Banner() {
  const translate = useTranslations("app");

  return (
    <div className="w-full pt-24 flex relative justify-between container mx-auto h-screen">
      <div className="flex flex-col items-start gap-y-6 pt-32">
        <h1 className="text-6xl font-black">
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

        <p className="text-2xl max-w-lg">{translate("banner.label")}</p>

        <Link
          className="px-12 py-6 text-lg mt-4 rounded-2xl bg-purpleColor text-white font-medium"
          href="#"
        >
          {translate("banner.read-more")}
        </Link>
      </div>

      <div className="relative -top-14">
        <div className="p-4 absolute items-center bottom-44 -left-0 border pr-20 border-[#ffffff70] rounded-3xl bg-[#370C7532]  backdrop-blur-sm flex gap-x-4">
          <div className="w-14 h-14 bg-[#D6BAFF] border border-white rounded-full" />

          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-orangeFruit">
              {translate("banner.floats.innovation.title")}
            </h4>

            <p className="text-white">
              {translate("banner.floats.innovation.label")}
            </p>
          </div>
        </div>

        {BannerImage}

        <div className="p-4 absolute items-center top-1/2 -right-20 border pr-20 border-[#ffffff70] rounded-3xl bg-[#1883E964]  backdrop-blur-sm flex gap-x-4">
          <div className="w-14 h-14 bg-[#D6BAFF] border border-white rounded-full" />

          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-[#FFFFFF53]">
              {translate("banner.floats.creativity.title")}
            </h4>

            <p className="text-white">
              {translate("banner.floats.creativity.label")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

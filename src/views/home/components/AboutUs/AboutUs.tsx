import { AboutUsIllustration } from "@/assets/illustrations/AboutUsIllustration";
import { useTranslations } from "next-intl";

export function AboutUs() {
  const translate = useTranslations("app");
  return (
    <div className="w-full container mx-auto flex items-center gap-x-32">
      <div>{AboutUsIllustration}</div>
      <div className="flex flex-col gap-y-6">
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
    </div>
  );
}

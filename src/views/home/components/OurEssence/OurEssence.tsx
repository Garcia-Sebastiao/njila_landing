import { EssencePath } from "@/assets/illustrations/EssencePath";
import { useTranslations } from "next-intl";
import { EssenceCard } from "./components/EssenceCard";

export function OurEssence() {
  const translate = useTranslations("app");

  return (
    <div className="w-full mx-auto container gap-y-20 lg:gap-y-32 flex flex-col items-center">
      <h2 className="text-4xl font-black text-textColor">
        {translate("our-essence.title.span1")}
        <span className="text-orangeFruit">
          {translate("our-essence.title.span2")}
        </span>
      </h2>

      <div className="relative w-full flex flex-col lg:justify-between lg:items-center gap-y-12 lg:flex-row">
        <div className="w-full -z-10 absolute left-1/2 -translate-x-1/2 top-0 hidden lg:flex justify-center">
          {EssencePath}
        </div>

        <EssenceCard
          className="lg:mt-[22rem] lg:ml-[4.4rem]"
          title={translate("our-essence.cards.mission.title")}
          label={translate("our-essence.cards.mission.label")}
          labelColor="text-[#662ABC90]"
          titleColor="bg-orangeFruit"
        />
        <EssenceCard
          className="lg:mt-16"
          title={translate("our-essence.cards.vision.title")}
          label={translate("our-essence.cards.vision.label")}
          labelColor="text-[#21374590]"
          titleColor="bg-blueOcean"
        />
        <EssenceCard
          className="lg:-mt-20 lg:mr-[4.4rem]"
          title={translate("our-essence.cards.values.title")}
          label={translate("our-essence.cards.values.label")}
          labelColor="text-[#1883E990]"
          titleColor="bg-purpleColor"
        />
      </div>
    </div>
  );
}

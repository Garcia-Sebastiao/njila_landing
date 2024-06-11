import { useTranslations } from "next-intl";
import Image from "next/image";
import { Member1, Member2 } from "./assets";

export function OurTeam() {
  const translate = useTranslations("app");

  return (
    <div className="w-full flex container mx-auto flex-col items-center gap-y-32">
      <div className="flex flex-col gap-y-4 items-center">
        <h2 className="text-4xl font-black text-textColor">
          <span className="text-blueOcean">
            {translate("our-team.title.span")}
          </span>{" "}
          {translate("our-team.title.label")}
        </h2>

        <p className="max-w-3xl text-center text-[#00000050] text-xl">
          {translate("our-team.label")}
        </p>
      </div>

      <div className="flex w-full justify-center items-center gap-x-16">
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-4 max-w-2xl">
            <h4 className="text-3xl font-black text-purpleColor">
              {translate("our-team.team.garcia.name")} -{" "}
              <span className="text-orangeFruit">
                {translate("our-team.team.garcia.role")}
              </span>
            </h4>

            <p className="text-lg text-[#00000050]">
              {translate("our-team.team.garcia.description")}
            </p>
          </div>

          <div className="flex ml-16 flex-col gap-y-4 max-w-2xl">
            <h4 className="text-3xl font-black text-purpleColor">
              {translate("our-team.team.crisvan.name")} -{" "}
              <span className="text-orangeFruit">
                {translate("our-team.team.crisvan.role")}
              </span>
            </h4>

            <p className="text-lg text-[#00000050]">
              {translate("our-team.team.crisvan.description")}
            </p>
          </div>

          <div className="w-full relative h-[11px] rounded-xl bg-orangeFruit bg-opacity-10 max-w-xs mt-24">
            <div className="absolute top-0 left-6 w-14 h-full rounded-xl bg-orangeFruit" />
          </div>
        </div>

        <div className="flex">
          <div className="relative w-[20rem] h-[25rem]">
            <Image
              src={Member1}
              alt="Garcia"
              className="w-full h-full object-cover rounded-[2rem]"
            />
            <div className="bg-[#370C7532] backdrop-blur-md absolute top-8 -right-32 px-8 py-4 rounded-2xl border border-[#ffffff90] flex items-center justify-center">
              <span className="text-white font-bold text-2xl ">
                Garcia Pedro
              </span>
            </div>
          </div>

          <div className="relative w-[20rem] h-[25rem] mt-44 -ml-14">
            <Image
              src={Member2}
              alt="Crisvan"
              className="w-full h-full object-cover rounded-[2rem]"
            />

            <div className="bg-[#370C7532] backdrop-blur-md absolute bottom-8 -left-32 px-8 py-4 rounded-2xl border border-[#ffffff90] flex items-center justify-center">
              <span className="text-white font-bold text-2xl ">
                Crisvan Van-Dúnem
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

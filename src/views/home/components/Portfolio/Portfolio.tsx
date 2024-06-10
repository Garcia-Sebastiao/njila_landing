import { useTranslations } from "next-intl";
import Image from "next/image";
import { Image1, Image2, Image3 } from "./assets";

export function Portfolio() {
  const translate = useTranslations("app");

  return (
    <div className="w-full container mx-auto flex mt-44 flex-col gap-y-24 items-center">
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="text-4xl font-black text-blueOcean">
          {translate("portfolio.title.label")}{" "}
          <span className="text-textColor">
            {translate("portfolio.title.span")}
          </span>
        </h2>

        <p className="max-w-xl text-center text-[#00000050] text-xl">
          {translate("portfolio.label")}
        </p>
      </div>

      <div className="w-full rounded-[2rem] bg-purpleColor p-8 flex gap-x-6">
        <div className="flex-1 max-w-xl h-[40rem] bg-red-400 rounded-[1.6rem] object-cover overflow-hidden">
          <Image
            src={Image1}
            alt="Imagem 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col h-[40rem] gap-6">
          <div className="w-full flex-1 rounded-[1.6rem] object-cover overflow-hidden bg-white">
            <Image
              src={Image2}
              alt="Imagem 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-1 items-center max-h-72 gap-x-6">
            <div className="flex-1 bg-slate-500 overflow-hidden object-cover rounded-[1.6rem] h-full">
              <Image
                src={Image3}
                alt="Imagem3"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col pr-12 gap-y-6">
              <div className="flex flex-col gap-y-4">
                <h4 className="font-bold text-4xl text-white">
                  {translate("portfolio.branding.title")}
                </h4>

                <p className="text-[#E3E3E3] text-xl max-w-[20rem]">
                  {translate("portfolio.branding.label")}
                </p>
              </div>

              <div className="w-full h-2 rounded-xl bg-[#FFF7EB25]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

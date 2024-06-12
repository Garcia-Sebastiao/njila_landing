import { useTranslations } from "next-intl";
import Image from "next/image";
import { Image1, Image2, Image3 } from "./assets";

export function Portfolio() {
  const translate = useTranslations("app");

  return (
    <div className="w-full container mx-auto flex flex-col gap-y-24 items-center">
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

      <div className="w-full rounded-[2rem] bg-purpleColor p-6 lg:p-8 flex flex-col-reverse gap-y-6 lg:flex-row gap-x-6">
        <div
          data-aos="zoom-in-up"
          className="flex-1 max-w-xl max-h-[16rem] lg:max-h-none md:h-[40rem] bg-red-400 rounded-xl lg:rounded-[1.6rem] object-cover overflow-hidden"
        >
          <Image
            src={Image1}
            alt="Imagem 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col-reverse lg:flex-col h-full lg:h-[40rem] gap-6">
          <div
            data-aos="zoom-in-left"
            className="w-full flex-1 min-h-[16rem] lg:h-[20rem] rounded-[1.6rem] object-cover overflow-hidden bg-white"
          >
            <Image
              src={Image2}
              alt="Imagem 2"
              className="w-full min-h-[16rem] lg:h-full object-cover"
            />
          </div>

          <div className="flex flex-col-reverse gap-y-6 lg:flex-row flex-1 items-center lg:max-h-72 gap-x-6">
            <div
              data-aos="zoom-in-left"
              className="flex-1 w-full lg:w-auto min-h-[16rem] max-h-[16rem] bg-slate-500 overflow-hidden object-cover rounded-[1.6rem] lg:h-full"
            >
              <Image
                src={Image3}
                alt="Imagem3"
                className="w-full  min-h-[16rem] lg:h-full object-cover"
              />
            </div>

            <div data-aos="fade-left" className="flex flex-col pr-0 lg:pr-12 gap-y-6">
              <div className="flex flex-col gap-y-4">
                <h4 className="font-bold text-2xl lg:text-4xl text-white">
                  {translate("portfolio.branding.title")}
                </h4>

                <p className="text-[#E3E3E3] text-base lg:text-xl max-w-none lg:max-w-[20rem]">
                  {translate("portfolio.branding.label")}
                </p>
              </div>

              <div className="w-full relative h-[11px] rounded-xl bg-[#FFF7EB25]">
                <div className="absolute top-0 left-6 w-14 h-full rounded-xl bg-orangeFruit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

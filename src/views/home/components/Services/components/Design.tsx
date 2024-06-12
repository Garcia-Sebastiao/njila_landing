import { useTranslations } from "next-intl";
import DesignIllustration from "../assets/Saly-10.svg";
import { DesignIcon } from "../assets/DesignIcon";
import Image from "next/image";

export function CustomDesign() {
  const translate = useTranslations("app");

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="flex flex-col gap-y-4 text-center">
        <h2 className="text-4xl font-black text-orangeFruit">
          {translate("services.title.title")}
          <span className="text-blueOcean">
            {translate("services.title.span")}
          </span>
        </h2>

        <p className="text-center text-[#00000050] max-w-4xl text-xl">
          {translate("services.label")}
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center gap-x-32">
        <Image
          src={DesignIllustration}
          alt={translate("services.design.title")}
        />

        <div className="flex flex-col relative gap-y-4 mt-14">
          <h2 className="text-3xl lg:text-4xl font-black text-textColor">
            {translate("services.design.title")}
          </h2>

          <p className="text-xl max-w-xl">
            {translate("services.design.label")}
          </p>

          <div className="absolute hidden lg:block -top-20 -right-16">{DesignIcon}</div>
        </div>
      </div>
    </div>
  );
}

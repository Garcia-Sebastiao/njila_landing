import { useTranslations } from "next-intl";
import { path2 } from "../assets/path2";
import { MarketingIllustration } from "../assets/MarketingIllustration";
import { MarketingIcon } from "../assets/MarketingIcon";

export function Marketing() {
  const translate = useTranslations("app");

  return (
    <div className="w-full relative">
      <div className="absolute right-0">{path2}</div>

      <div className="container relative z-10 mt-20 mx-auto flex flex-col items-center">
        <div className="w-full flex   items-center gap-x-32">
          <div className="flex flex-col relative gap-y-4 mt-14">
            <h2 className="text-4xl font-black text-blueOcean">
              {translate("services.marketing.title.label")}
              <span className="text-orangeFruit">
                {" "}
                {translate("services.marketing.title.span")}
              </span>
            </h2>

            <p className="text-xl max-w-xl">
              {translate("services.marketing.label")}
            </p>

            <div className="absolute -top-32 -left-32">{MarketingIcon}</div>
          </div>
          {MarketingIllustration}{" "}
        </div>
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";
import { path2 } from "../assets/path2";
import MarketingIllustration from "../assets/marketing.svg";
import { MarketingIcon } from "../assets/MarketingIcon";
import { Container } from "@/components/layout/container/Container";
import Image from "next/image";

export function Marketing() {
  const translate = useTranslations("app");

  return (
    <div className="w-full relative">
      <div className="absolute right-0 hidden lg:flex">{path2}</div>
      <div className="absolute w-96 lg:w-auto flex left-0 rotate-180 lg:rotate-0 lg:right-0 lg:hidden">
        {path2}
      </div>

      <Container className="relative z-10 mt-0 lg:mt-20 mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col-reverse lg:flex-row  items-center gap-x-32">
          <div data-aos="fade-right" className="flex flex-col relative gap-y-4 mt-14">
            <h2 className="text-3xl lg:text-4xl font-black text-blueOcean">
              {translate("services.marketing.title.label")}{" "}
              <span className="text-orangeFruit">
                {translate("services.marketing.title.span")}
              </span>
            </h2>

            <p className="text-xl max-w-xl">
              {translate("services.marketing.label")}
            </p>

            <div className="absolute -top-32 -left-32 hidden lg:block">{MarketingIcon}</div>
          </div>

          <Image data-aos="fade-left" src={MarketingIllustration} alt="Marketing" />
        </div>
      </Container>
    </div>
  );
}

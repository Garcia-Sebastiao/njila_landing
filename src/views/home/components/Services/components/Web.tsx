import { useTranslations } from "next-intl";
import WebIllustration from "../assets/Web-Development.svg";
import { WebIcon } from "../assets/WebIcon";
import Image from "next/image";
import { Container } from "@/components/layout/container/Container";

export function WebDevelopment() {
  const translate = useTranslations("app");

  return (
    <Container className=" relative z-10 mt-0 lg:mt-20 flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row items-center gap-x-32">
        <Image
          data-aos="flip-left"
          src={WebIllustration}
          alt="Web Development"
        />

        <div data-aos="fade-left" className="flex flex-col relative gap-y-4">
          <h2 className="text-3xl lg:text-4xl font-black text-textColor">
            {translate("services.web.title.label")}
            <span className="text-purpleColor">
              {" "}
              {translate("services.web.title.span")}
            </span>
          </h2>

          <p className="text-xl max-w-xl">{translate("services.web.label")}</p>

          <div className="absolute -bottom-56 -right-56 hidden lg:block">
            {WebIcon}
          </div>
        </div>
      </div>
    </Container>
  );
}

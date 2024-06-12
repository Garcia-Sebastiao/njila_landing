import { useTranslations } from "next-intl";
import { Path1 } from "./assets/path1";
import { DesignIllustration } from "./assets/DesignIllustration";
import { DesignIcon } from "./assets/DesignIcon";
import { CustomDesign } from "./components/Design";
import { Marketing } from "./components/Marketing";
import { WebDevelopment } from "./components/Web";

export function Services() {
  const translate = useTranslations("app");

  return (
    <div className="w-full relative flex flex-col gap-y-24">
      <div className="absolute flex w-96 md:w-[28rem] lg:w-auto -top-[25rem] right-0 rotate-180 lg:rotate-0 lg:left-0 ">{Path1}</div>

      <CustomDesign />
      <Marketing />
      <WebDevelopment />
    </div>
  );
}

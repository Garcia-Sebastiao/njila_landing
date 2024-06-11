import { useTranslations } from "next-intl";
import { WebIllustration } from "../assets/WebDevelopmentIllustration";
import { WebIcon } from "../assets/WebIcon";

export function WebDevelopment() {
  const translate = useTranslations("app");

  return (
    <div className="container relative z-10 mt-20 mx-auto flex flex-col items-center">
      <div className="w-full flex items-center gap-x-32">
        {WebIllustration}

        <div className="flex flex-col relative gap-y-4">
          <h2 className="text-4xl font-black text-textColor">
            {translate("services.web.title.label")}
            <span className="text-purpleColor">
              {" "}
              {translate("services.web.title.span")}
            </span>
          </h2>

          <p className="text-xl max-w-xl">{translate("services.web.label")}</p>

          <div className="absolute -bottom-56 -right-56">{WebIcon}</div>
        </div>
      </div>
    </div>
  );
}

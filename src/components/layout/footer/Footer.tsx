import { ContactsPath } from "@/views/home/components/Contacts/assets/ContactsPath";
import { FooterIllustration } from "./FooterIllustration";
import { useTranslations } from "next-intl";

export function Footer() {
  const translate = useTranslations("app");

  return (
    <div className="w-full relative justify-start z-20x min-h-[545px] bg-blueOcean  mt-40 pt-24">
      <div className="container w-full mx-auto">
        <div className="flex flex-col gap-y-5">
          <h4 className="text-4xl text-white font-bold">
            {translate("footer.title")}
          </h4>
        </div>
      </div>
      
      <div className="absolute -top-[170%] -z-10  left-1/2 -translate-x-1/2">
        {ContactsPath}
      </div>
      <div className="absolute bottom-0 right-0 z-10">{FooterIllustration}</div>
    </div>
  );
}

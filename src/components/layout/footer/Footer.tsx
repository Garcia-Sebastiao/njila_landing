import { ContactsPath } from "@/views/home/components/Contacts/assets/ContactsPath";
import { FooterIllustration } from "./FooterIllustration";
import { useTranslations } from "next-intl";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import { EmailIcon } from "@/assets/icons/EmailIcon";
import { LocateIcon } from "@/assets/icons/LocateIcon";
import { Container } from "../container/Container";

export function Footer() {
  const translate = useTranslations("app");

  return (
    <div className="w-full relative justify-start z-20x min-h-[545px] bg-blueOcean  mt-40 pt-12 lg:pt-24">
      <Container className="w-full">
        <div className="flex flex-col gap-y-12">
          <h4 className="text-4xl text-white font-bold">
            {translate("footer.title")}
          </h4>

          <div className="flex flex-col items-start gap-y-6">
            <div className="flex items-start gap-x-4">
              {PhoneIcon}
              <span className="text-white text-lg lg:text-xl">
                +244 923 123 456
              </span>
            </div>
            <div className="flex items-start gap-x-4">
              {EmailIcon}
              <span className="text-white text-lg lg:text-xl">
                njila.brand@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-x-4">
              {LocateIcon}
              <span className="text-white text-lg lg:text-xl">
                Angola, Luanda, Rangel, Bairro CTT, Digital.Ao
              </span>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 w-full h-16 flex items-center  bg-[#1669B8]">
        <div className="mx-auto container w-full h-full flex items-center justify-start">
          <span className="font-bold text-white">
            {translate("footer.copy")}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 -z-10 w-[64rem] lg:w-auto flex  left-1/2 -translate-x-1/2">
        {ContactsPath}
      </div>

      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        {FooterIllustration}
      </div>
    </div>
  );
}

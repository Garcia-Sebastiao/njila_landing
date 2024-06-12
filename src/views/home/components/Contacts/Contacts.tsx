import { useTranslations } from "next-intl";
import { ContactsPath } from "./assets/ContactsPath";
import { Container } from "@/components/layout/container/Container";

export function Contacts() {
  const translate = useTranslations("app");

  return (
    <div id="contacts" className="w-full relative mt-32 lg:mt-64">
      <Container className="w-full relative flex flex-col justify-start">
        <div className="flex flex-col gap-y-6">
          <h2 className="font-black text-4xl">
            {translate("contacts.title.title")} <br />{" "}
            <span className="text-purpleColor">
              {translate("contacts.title.span")}
            </span>
          </h2>

          <p className="text-xl text-textColor max-w-xl">
            {translate("contacts.label")}
          </p>

          <form action="" className="flex flex-col gap-y-6 md:flex-row gap-x-6">
            <input
              type="email"
              placeholder={translate("contacts.form.email")}
              className="bg-[#00000010] text-[#00000050] 2-full md:w-96 border p-4 rounded-2xl text-xl border-[#ffffff90] backdrop-blur-md"
            />

            <button className="bg-orangeFruit transition-all hover:brightness-90 px-16 text-xl py-4 rounded-2xl text-white">
              {translate("contacts.form.button")}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

import { useTranslations } from "next-intl";
import { ContactsPath } from "./assets/ContactsPath";

export function Contacts() {
  const translate = useTranslations("app");

  return (
    <div className="w-full relative mt-64">
      <div className="w-full mx-auto container relative flex flex-col justify-start">
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

          <form action="" className="flex gap-x-6">
            <input
              type="email"
              placeholder={translate("contacts.form.email")}
              className="bg-[#00000010] text-[#00000050] w-96 border p-4 rounded-2xl text-xl border-[#ffffff90] backdrop-blur-md"
            />

            <button className="bg-orangeFruit px-16 text-xl py-4 rounded-2xl text-white">
              {translate("contacts.form.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

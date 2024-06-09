import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt", "fr", "es"],

  defaultLocale: "pt",
});

export const config = {
  matcher: ["/", "/(pt|en|es|fr)/:path*"],
};

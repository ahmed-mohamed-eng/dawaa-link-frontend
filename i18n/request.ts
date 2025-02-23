import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import RoutingLangues from "@/types/Language.type";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = (await requestLocale) || "ar";

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as RoutingLangues)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

import type { Locale } from "./config";

const dictionaries = {
  pt: () => import("./dictionaries/pt").then((module) => module.default),
  en: () => import("./dictionaries/en").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

import Vue from "vue";
import VueI18n from "vue-i18n";
import { ru } from "./langs/ru.json";
import { uz } from "./langs/uz.json";

Vue.use(VueI18n);
export const selectedLocale = "uz";
export const languages = [
  { name: "Русский", value: "ru" },
  { name: "O'zbek", value: "uz" },
];
const messages = {
  ru,
  uz,
};
const i18n = new VueI18n({
  locale: selectedLocale,
  messages,
});

export default i18n;

import En from "../locale/En.json";
import Hi from "../locale/Hi.json";
let CurrentLanguage = En;

const SelectLanguage = (language) => {
  switch (language) {
    case "En":
      CurrentLanguage = En;
      break;
    case "Hi":
      CurrentLanguage = Hi;
      break;

    default:
      CurrentLanguage = En;
      break;
  }
};

const translate = (key, language) => {
  SelectLanguage(language);
  return CurrentLanguage[key];
};

export default translate;

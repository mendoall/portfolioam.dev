import es from "../../public/locals/es.json";
import en from "../../public/locals/en.json";

const translations = { es, en };

export const getTranslation = (lang: string, key: string): string => {
    return translations[lang]?.[key] || key;
};

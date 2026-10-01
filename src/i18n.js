import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from './locates/pt-BR.json'
import en from './locates/en.json'

i18next.use(initReactI18next).init({
    resources: {
        'en': { translation: en },
        'pt-BR': { translation: ptBR}
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18next
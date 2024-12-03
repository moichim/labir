import i18next from 'i18next';
import { initLitI18n } from 'lit-i18n';
import LanguageDetector from 'i18next-browser-languagedetector';

const translationObject = i18next
    .use(initLitI18n)
    .use(LanguageDetector)
    .init(
    {
        // lng: 'de',
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    whatishow: '{{what}} is {{how}}',
                    datamodel: '{{person.name}} is a {{person.age}} year old and is male: {{person.male}}',
                },
            },
            fr: {
                translation: {
                    whatishow: '{{what}} est {{how}}',
                    datamodel: '{{person.name}} a {{person.age}} ans et est un homme: {{person.male}}',
                },
            },
            cs: {
                translation: {
                    whatishow: '{{what}} je {{how}}',
                    datamodel: '{{person.name}} a {{person.age}} ans et est un homme: {{person.male}}',
                },
            },
        },
    }
);
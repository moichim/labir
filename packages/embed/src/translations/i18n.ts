import i18next from 'i18next';
import { initLitI18n } from 'lit-i18n';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en } from './languages/en';
import { fr } from './languages/fr';
import { cs } from './languages/cs';
import { cy } from './languages/cy';

/** initialise the I18n object */
i18next
    .use(initLitI18n)
    .use(LanguageDetector)
    .init(
    {
        // lng: 'de',
        fallbackLng: "en",
        resources: {
            en: {
                translation: en,
            },
            fr: {
                translation: fr,
            },
            cs: {
                translation: cs,
            },
            cy: {
                translation: cy
            }
        },
    }
);
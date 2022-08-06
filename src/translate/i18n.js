import I18n from 'i18n-js';
import * as Localization from 'expo-localization';
import tr from './tr';
import en from './en';

//const locales = Lo.getLocales();
I18n.locale = Localization.locale;
I18n.fallbacks = true;
I18n.locales.no = 'en';
I18n.translations = {
    en,
    tr,
};

export default I18n;


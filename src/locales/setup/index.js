import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

export const SUPPORT_LOCALES = ['es', 'en'];

export function setI18nLanguage(i18n, locale) {
	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale;
	} else {
		i18n.global.locale.value = locale;
	}

	document.querySelector('html').setAttribute('lang', locale);
}

export async function loadLocaleMessages(i18n, locale) {
	const messages = await import(/* webpackChunkName: "locale-[request]" */ `../${locale}.json`);

	i18n.global.setLocaleMessage(locale, messages.default);

	return nextTick();
}

export function setupI18n(options = { locale: 'es' }) {
	const i18n = createI18n(options);

	setI18nLanguage(i18n, options.locale);
	loadLocaleMessages(i18n, options.locale);

	return i18n;
}

export const i18n = setupI18n({
	legacy: false,
	locale: 'es',
	fallbackLocale: 'en',
});

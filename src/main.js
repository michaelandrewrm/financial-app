import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { i18n } from './locales/setup';

import './styles/main.css';

const pinia = createPinia();
const app = createApp(App);

// eslint-disable-next-line no-unused-vars
app.config.errorHandler = (err) => {
	/* handle error */
};

app.use(i18n);
app.use(pinia);
app.use(router);

app.mount('#app');

window.__app__ = app;

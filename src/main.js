import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import { i18n } from './locales/setup';

import './styles/main.css';

const pinia = createPinia();
const app = createApp(App);

app.config.errorHandler = (err) => {
	/* handle error */
};

app.use(i18n);
app.use(pinia);
app.use(router);
app.component('fa-icon', FontAwesomeIcon);

app.mount('#app');

if (process.env.NODE_ENV !== 'production') {
	window.__app__ = app;
}

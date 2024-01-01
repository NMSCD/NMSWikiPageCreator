import './startup/minimal';

import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());

app.mount('#app');

import { createApp } from 'vue';
import store from './store/index.js'
import router from './router.js';
import App from './App.vue';
import BaseCard from './components/BaseCard';
import BaseButton from './components/BaseButton';
import BaseBadge from './components/BaseBadge'
const app = createApp(App)

app.use(router);
app.use(store);
app.component('base-card',BaseCard);
app.component('base-badge',BaseBadge);
app.component('base-button',BaseButton);
app.mount('#app');

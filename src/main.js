import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css';

import WelcomeAnimation from './components/WelcomeAnimation.vue';

const app = createApp(App);

app.component('welcome-animation', WelcomeAnimation);

app.mount('#app');

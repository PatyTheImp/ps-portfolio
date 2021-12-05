import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css';

import WelcomeAnimation from './components/WelcomeAnimation.vue';
import PsGallery from './components/PsGallery.vue';

const app = createApp(App);

app.component('welcome-animation', WelcomeAnimation);
app.component('ps-gallery', PsGallery);

app.mount('#app');

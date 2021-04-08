import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import 'normalize.css/normalize.css'
import './assets/icon.css'
// import '@/styles/index.css'
import 'tailwindcss/tailwind.css'
createApp(App).use(router).use(createPinia()).mount('#app')

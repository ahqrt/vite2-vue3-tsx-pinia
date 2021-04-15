import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import 'normalize.css/normalize.css'
import './assets/icon.css'
import 'tailwindcss/tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(ElementPlus).use(createPinia()).mount('#app')

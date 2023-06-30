import './assets/style.css'
import 'leaflet/dist/leaflet.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'

createApp(App).use(router).mount('#app')

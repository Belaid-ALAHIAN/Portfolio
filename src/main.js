import './assets/style.css'
import 'leaflet/dist/leaflet.css'
import '@egjs/flicking-plugins/dist/flicking-plugins.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).use(router).mount('#app')

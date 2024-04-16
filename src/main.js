// import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vueapexcharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(createPinia())
app.use(Vueapexcharts);
app.use(router)
app.mount('#app')

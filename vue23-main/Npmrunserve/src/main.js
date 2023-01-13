import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import theHeader from './theHeader.vue'
const app = createApp(App)
app.component('the-header',theHeader)
app.mount('#app')

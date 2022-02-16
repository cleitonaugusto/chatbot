import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'animate.css'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import mitt from 'mitt';
import '@mdi/font/css/materialdesignicons.css'
import './assets/css/common.css'

const emitter = mitt();

const app = createApp(App)
app.use(router)
app.use(store)

app.config.globalProperties.emitter = emitter;

app.mount('#app')

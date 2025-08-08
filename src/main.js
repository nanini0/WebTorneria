import { createApp } from 'vue'
import { createPinia } from 'pinia'

import BootstrapVue3 from 'bootstrap-vue-3'

// Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

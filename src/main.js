import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


// register globally
// component('vue-multiselect', window.VueMultiselect.default)

createApp(App)
    .use(router)
    // Setup the plugin with optional defaults
    // Use the components
    .use(BootstrapVue3)
    .use(VCalendar, {})
    .mount('#app')

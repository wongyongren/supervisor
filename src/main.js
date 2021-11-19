import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';
import BootstrapVue3 from 'bootstrap-vue-3'
import print from 'vue3-print-nb'


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
    .use(print)
    .mount('#app')

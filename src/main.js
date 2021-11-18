import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';

// register globally
// component('vue-multiselect', window.VueMultiselect.default)

createApp(App)
    .use(router)
    // Setup the plugin with optional defaults
    // Use the components

    .use(VCalendar, {})
    .mount('#app')

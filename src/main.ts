import { createApp } from 'vue'
import App from './App.vue'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import store from './store'
import router from './router'

createApp(App)
    .use(router)
    .use(store)
    .use(ViewUIPlus)
    .mount('#app')

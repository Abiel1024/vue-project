import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './util/iview'
// import 'view-design/dist/styles/iview.css';

createApp(App).use(store).use(router).mount('#app')

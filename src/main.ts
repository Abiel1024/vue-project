import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './style/element-variables.scss'

const app = createApp(App)

app.use(ElementPlus, { locale, size: 'small' })
app.use(store).use(router).mount('#app')

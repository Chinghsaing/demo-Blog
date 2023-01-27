import { createApp } from 'vue'
import './style.css'
import './style/GobalStyle.less'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { directive } from './directive/directive'

const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

directive(app)
app.use(router).use(pinia).use(ElementPlus).mount('#app')


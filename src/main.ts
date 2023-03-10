import { createApp } from 'vue'
import Markdown from 'vue3-markdown-it'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(Markdown)
app.use(createPinia())
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')

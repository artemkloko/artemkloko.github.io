import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { i18n } from './i18n'
import router from './router'

library.add(fas, fab)

const head = createHead()

createApp(App)
  .use(i18n)
  .use(router)
  .use(head)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

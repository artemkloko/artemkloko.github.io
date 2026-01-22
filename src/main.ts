import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faCalendarCheck, faPrint } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faDocker, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { i18n } from './i18n'
import router from './router'

library.add(faEnvelope, faLocationDot, faPhone, faCalendarCheck, faPrint, faGithubAlt, faDocker, faStackOverflow, faLinkedin)

const head = createHead()

createApp(App)
  .use(i18n)
  .use(router)
  .use(head)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

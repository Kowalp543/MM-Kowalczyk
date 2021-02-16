import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faPhoneVolume, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'normalize.css'


library.add(faPhone, faPhoneVolume, faMapMarkerAlt)
library.add(faClock)
library.add(faFontAwesome)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
}).$mount('#app')

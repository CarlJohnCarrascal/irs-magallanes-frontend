import { createApp, onMounted } from 'vue'
import App from './App.vue'
import auth from './router/auth'
import router from './router'
import App2 from './App2.vue'
import useAccount from './composables/account'
const { checkLoginStatus, isLogin } = useAccount()

import 'bootstrap'
import './assets/main.css'

import './assets/vendor/jquery/jquery.min.js'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/vendor/jquery-easing/jquery.easing.min.js'
import './assets/js/sb-admin-2.min.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

// await checkLoginStatus()
// const app = null
// if (isLogin.value) {
//     const app = createApp(App)
//     app.use(router)
//     app.mount('#app')
// } else {
//     const app = createApp(App2)
//     app.use(auth)
//     app.mount('#app')
// }



import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/Auth/LoginView.vue'
import SignUpView from '../views/Auth/SignUpView.vue'

import NotFound from '../components/NotFound.vue'

const auth = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'login',
      alias: ['/login','/'],
      component: LoginView,
      params: { 'title': 'Login' }
    },
    {
      path: '/signup',
      alias: ['/auth/account/new'],
      name: 'signup',
      component: SignUpView,
      params: { 'title': 'Account' }
    },
    { path: '/:pathMatch(.*)*', name: 'login', component: LoginView },
  ]
})

export default auth

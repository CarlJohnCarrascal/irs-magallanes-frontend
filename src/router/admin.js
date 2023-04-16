import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import LoginView from '../views/Auth/LoginView.vue'
import SignUpView from '../views/Auth/SignUpView.vue'

import DashboardView from '../views/DashboardView.vue'
import NotFound from '../components/NotFound.vue'

import IncidentToday from '../views/incident/IncidentToday.vue'
import IncidentHistory from '../views/incident/IncidentHistory.vue'
import IncidentPending from '../views/incident/IncidentPending.vue'
import IncidentDetails from '../views/incident/IncidentDetails.vue'
import IncidentEdit from '../views/incident/IncidentEdit.vue'
import NewReport from '../views/incident/NewReport.vue'
import IncidentPropertiesView from '../views/incident/IncidentPropertiesView.vue'

import ProfileView from '../views/account/ProfileView.vue'
import EditAccountView from '../views/account/EditAccountView.vue'
import ChangePasswordView from '../views/account/ChangePasswordView.vue'
import UserAccountView from '../views/account/UserAccountView.vue'
import PendingAccountView from '../views/account/PendingAccountView.vue'
import DeactivatedAccountView from '../views/account/DeactivatedAccountView.vue'
import RulesView from '../views/account/RulesView.vue'

import NotificationView from '../views/activities/NotificationView.vue'
import MessagesView from '../views/activities/MessagesView.vue'
import LogsView from '../views/activities/LogsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      params: { 'title': 'About' }
    },
    {
      path: '/dashboard',
      alias: ['/'],
      name: 'dashboard',
      component: DashboardView,
      params: { 'title': 'Dashboard' }
    },
    {
      path: '/incident/today',
      name: 'reporttoday',
      component: IncidentToday
    },
    {
      path: '/incident/history',
      name: 'reporthistory',
      component: IncidentHistory
    },
    {
      path: '/incident/pending',
      name: 'reportpending',
      component: IncidentPending
    },
    {
      path: '/incident/:id/details',
      name: 'reportdetails',
      component: IncidentDetails,
      props: true,
    },
    {
      path: '/incident/:id/edit',
      name: 'reportedit',
      component: IncidentEdit,
      props: true,
    },
    {
      path: '/incident/new',
      name: 'newreport',
      component: NewReport
    },
    {
      path: '/incident/properties',
      name: 'property',
      component: IncidentPropertiesView
    },
    {
      path: '/auth/account',
      name: 'account',
      component: LoginView,
      params: { 'title': 'Account' }
    },
    {
      path: '/auth/account/user-account',
      name: 'useraccount',
      component: UserAccountView
    },
    {
      path: '/auth/account/profile',
      name: 'myaccount',
      component: ProfileView
    },
    {
      path: '/auth/account/edit',
      name: 'editaccount',
      component: EditAccountView
    },
    {
      path: '/auth/account/changepassword',
      name: 'changepassword',
      component: ChangePasswordView
    },
    {
      path: '/auth/account/pending-account',
      name: 'pendingaccount',
      component: PendingAccountView
    },
    {
      path: '/auth/account/deactivated-account',
      name: 'deactivatedaccount',
      component: DeactivatedAccountView
    },
    {
      path: '/auth/account/rules',
      name: 'accountrules',
      component: RulesView
    },
    {
      path: '/activities/notifications',
      name: 'notifications',
      component: NotificationView
    },
    {
      path: '/activities/messages',
      name: 'messages',
      component: MessagesView
    },
    {
      path: '/activities/logs',
      name: 'logs',
      component: LogsView
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ]
})

export default router

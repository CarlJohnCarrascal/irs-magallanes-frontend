import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DashboardView from '../views/DashboardView.vue'
import NotFound from '../components/NotFound.vue'

import IncidentToday from '../views/incident/IncidentToday.vue'
import IncidentHistory from '../views/incident/IncidentHistory.vue'
import IncidentDetails from '../views/incident/IncidentDetails.vue'
import IncidentPending from '../views/incident/IncidentPending.vue'
import IncidentEdit from '../views/incident/IncidentEdit.vue'
import NewReport from '../views/incident/NewReport.vue'

import ProfileView from '../views/account/ProfileView.vue'
import EditAccountView from '../views/account/EditAccountView.vue'
import ChangePasswordView from '../views/account/ChangePasswordView.vue'

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
      params: { title: 'Incident' },
      component: IncidentToday
    },
    {
      path: '/incident/history',
      name: 'reporthistory',
      params: { title: 'Incident' },
      component: IncidentHistory
    },
    {
      path: '/incident/pending',
      name: 'reportpending',
      params: { 'title': 'Incident' },
      component: IncidentPending
    },
    {
      path: '/incident/:id/details',
      name: 'reportdetails',
      params: { 'title': 'Incident' },
      component: IncidentDetails,
      props: true,
    },
    {
      path: '/incident/:id/edit',
      name: 'reportedit',
      params: { 'title': 'Incident' },
      component: IncidentEdit,
      props: true,
    },
    {
      path: '/incident/new',
      name: 'newreport',
      params: { 'title': 'Incident' },
      component: NewReport
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

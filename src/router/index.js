import { createRouter, createWebHistory } from 'vue-router'

import useBase from '../composables/base'
const { getCookie2 } = useBase()

import HomeView from '../views/HomeView.vue'

import LoginView from '../views/Auth/LoginView.vue'
import SignUpView from '../views/Auth/SignUpView.vue'

import DashboardView from '../views/DashboardView.vue'
import NotFound from '../components/NotFound.vue'

import IncidentToday from '../views/incident/IncidentToday.vue'
import IncidentHistory from '../views/incident/IncidentHistory.vue'
import IncidentPending from '../views/incident/IncidentPending.vue'
import IncidentDetails from '../views/incident/IncidentDetails.vue'
import IncidentPatient from '../views/incident/IncidentPatient.vue'
import IncidentEdit from '../views/incident/IncidentEdit.vue'
import EditReport from '../views/incident/EditReport.vue'
import NewReport from '../views/incident/NewReport.vue'
import IncidentPropertiesView from '../views/incident/IncidentPropertiesView.vue'

import ProfileView from '../views/account/ProfileView.vue'
import EditAccountView from '../views/account/EditAccountView.vue'
import ChangePasswordView from '../views/account/ChangePasswordView.vue'
import UserAccountView from '../views/account/UserAccountView.vue'
import PendingAccountView from '../views/account/PendingAccountView.vue'
import DeactivatedAccountView from '../views/account/DeactivatedAccountView.vue'
import RulesView from '../views/account/RulesView.vue'
import UserDetailView from '../views/account/UserDetailView.vue'

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
      meta: {
        requiredAuth: false,
        title: 'About'
      }
    },
    {
      path: '/dashboard',
      alias: ['/'],
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiredAuth: true,
        title: 'Dashboard'
      }
    },
    {
      path: '/incident/today',
      name: 'reporttoday',
      component: IncidentToday,
      meta: {
        requiredAuth: true,
        title: 'Incident'
      }
    },
    {
      path: '/incident/history',
      name: 'reporthistory',
      component: IncidentHistory,
      props: {
        f: 'today'
      },
      meta: {
        requiredAuth: true,
        title: 'Incident'
      }
    },
    {
      path: '/incident/pending',
      name: 'reportpending',
      component: IncidentPending,
      meta: {
        requiredAuth: true,
        title: 'Incident'
      }
    },
    {
      path: '/incident/patient',
      name: 'reportpatient',
      component: IncidentPatient,
      meta: {
        requiredAuth: true,
        title: 'Incident'
      }
    },
    {
      path: '/incident/:id/edit',
      name: 'reportedit',
      component: IncidentEdit,
      props: true,
      meta: {
        requiredAuth: true,
        title: 'Incident'
      }
    },
    {
      path: '/incident/new',
      name: 'newreport',
      component: NewReport,
      meta: {
        requiredAuth: false,
        title: 'Incident'
      }
    },
    {
      path: '/incident/:id/edit',
      name: 'editreport',
      component: EditReport,
      meta: {
        requiredAuth: false,
        title: 'Incident'
      }
    },
    {
      path: '/settings/properties',
      name: 'property',
      component: IncidentPropertiesView,
      meta: {
        requiredAuth: true,
        role: 'admin',
        title: 'Settings'
      }
    },
    {
      path: '/account',
      name: 'account',
      component: LoginView,
      meta: {
        requiredAuth: true,
        role: 'admin',
        title: 'Account'
      }
    },
    {
      path: '/account/user-account',
      name: 'useraccount',
      component: UserAccountView,
      meta: {
        requiredAuth: true,
        role: 'admin',
        title: 'Account'
      }
    },
    {
      path: '/account/profile',
      name: 'myaccount',
      component: ProfileView,
      meta: {
        requiredAuth: true,
        title: 'Account'
      }
    },
    {
      path: '/account/edit',
      name: 'editaccount',
      component: EditAccountView,
      meta: {
        requiredAuth: true,
        title: 'Account'
      }
    },
    {
      path: '/account/:id/detail',
      name: 'userdetail',
      component: UserDetailView,
      props: true,
      meta: {
        requiredAuth: true,
        title: 'Account'
      }
    },
    {
      path: '/account/:id/detail',
      name: 'userdetaild',
      component: UserDetailView,
      props: true,
      meta: {
        requiredAuth: true,
        title: 'Account'
      }
    },
    {
      path: '/account/changepassword',
      name: 'changepassword',
      component: ChangePasswordView,
      meta: {
        requiredAuth: true,
        title: 'Account'
      }
    },
    {
      path: '/account/pending-account',
      name: 'pendingaccount',
      component: PendingAccountView,
      meta: {
        requiredAuth: true,
        role: 'admin',
        title: 'Account'
      }
    },
    {
      path: '/account/deactivated-account',
      name: 'deactivatedaccount',
      component: DeactivatedAccountView,
      meta: {
        requiredAuth: true,
        role: 'admin',
        title: 'Account'
      }
    },
    {
      path: '/settings/rules',
      name: 'accountrules',
      component: RulesView,
      meta: {
        requiredAuth: true,
        role: 'admin',
        title: 'Settings'
      }
    },
    {
      path: '/activities/notifications',
      name: 'notifications',
      component: NotificationView,
      meta: {
        requiredAuth: true,
        title: 'Activity'
      }
    },
    {
      path: '/activities/messages',
      name: 'messages',
      component: MessagesView,
      meta: {
        requiredAuth: true,
        title: 'Activity'
      }
    },
    {
      path: '/activities/logs',
      name: 'logs',
      component: LogsView,
      meta: {
        requiredAuth: true,
        title: 'Activity'
      }
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.requiredAuth) {
    if (!getCookie2('name')) {
      window.location.href = "/"
    }
    if (to.meta.role == 'admin' && getCookie2('role') != to.meta.role) {
      console.log(to.fullPath, to.meta.role)
      return { name: 'not-found'}
    }
  }
})

export default router

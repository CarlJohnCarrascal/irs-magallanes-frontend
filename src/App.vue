<script setup>
import { RouterLink, RouterView, useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import FooterCom from './components/FooterCom.vue'
import TopBarCom from './components/TopBarCom.vue'

import SideBar from './components/SideBar.vue'
import Logout from './components/Logout.vue'
import ScrollTopButton from './components/ScrollTopButton.vue'

import { onMounted, onUpdated, watch } from 'vue'
import useAccount from './composables/account'
import IncidentHistory from './views/incident/IncidentHistory.vue'
import Dashboard from './views/DashboardView.vue'

const route = useRoute()
const router = useRouter()
const { checkLoginStatus, isLogin } = useAccount();
//isLogin.value = true;

onMounted(async () => {
  await activeCurrentPageEvent()
  await checkLoginStatus()
})

watch(
  () => route.fullPath,
  async () => {
    await activeCurrentPageEvent()
  }
);

async function activeCurrentPageEvent() {

  await router.isReady()
  const cr = router.currentRoute.value.name
  var toActivate = ""
  switch (cr) {
    case 'dashboard':
      toActivate = ".d-dashboard"
      break;
    case 'reporthistory':
      toActivate = ".incident-history"
      break;
    case 'reporttoday':
      toActivate = ".incident-today"
      break;
    case 'reportdetails':
      toActivate = ".incident-history"
      break;
    case 'reportdetails2':
      toActivate = ".incident-pending"
      break;
    case 'reportdetails3':
      toActivate = ".incident-patient"
      break;
    case 'newreport':
      toActivate = ".incident-new"
      break;
    case 'reportpending':
      toActivate = ".incident-pending"
      break;
    case 'reportpatient':
      toActivate = ".incident-patient"
      break;
    case 'property':
      toActivate = ".incident-properties"
      break;
    case 'signup':
      toActivate = ".account-new"
      break;
    case 'myaccount':
      toActivate = ".account-profile"
      break;
    case 'editaccount':
      toActivate = ".account-profile"
      break;
    case 'changepassword':
      toActivate = ".account-profile"
      break;
    case 'useraccount':
      toActivate = ".account-users"
      break;
    case 'userdetail':
      toActivate = ".account-users"
      break;
    case 'pendingaccount':
      toActivate = ".account-pending"
      break;
    case 'deactivatedaccount':
      toActivate = ".account-deactivated"
      break;
    case 'userdetaild':
      toActivate = ".account-deactivated"
      break;
    case 'accountrules':
      toActivate = ".account-rules"
      break;
    case 'notifications':
      toActivate = ".activity-notifications"
      break;
    case 'messages':
      toActivate = ".activity-messages"
      break;
    case 'logs':
      toActivate = ".activity-logs"
      break;
    default:
      break;
  }
  //console.log(toActivate)
  $(".nav-item").removeClass('active')
  $(".collapse-item").removeClass('active')
  $(toActivate).addClass("active")
  $(toActivate).closest('.nav-item').addClass('active')
}

</script>


<template>
  <div class="">
    <!-- Page Wrapper -->
    <div id="wrapper">
        <SideBar ref="toggleEvent" />
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBarCom />

            <!-- Begin Page Content -->
            <div class="container-fluid">
              <!-- <span class=" text-right">{{ $route.fullPath.toLocaleUpperCase().replace('/','~ ').replaceAll('/',' > ') }}</span> -->
                <RouterView />
            </div>
          </div>
          <FooterCom />
        </div>
    </div>
    <!-- End of Page Wrapper -->

    <ScrollTopButton />
    <Logout />
  </div>
</template>

<style></style>

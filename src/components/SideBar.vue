<script setup>

import DashboardItem from '../components/sidebar/DashboardItem.vue'
import AccountItemAdmin from '../components/sidebar/AccountItemAdmin.vue'
import AccountItemUser from '../components/sidebar/AccountItemUser.vue'
import IncidentItem from '../components/sidebar/IncidentItem.vue'
import IncidentItemUser from '../components/sidebar/IncidentItemUser.vue'
import SettingsItem from '../components/sidebar/SettingsItem.vue'
import ActivityItem from '../components/sidebar/ActivityItem.vue'

import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import useAccount from '../composables/account'
import side from '../assets/js/sidebar/side'
const { load } = side()

const { getUser, role } = useAccount()
//import '../assets/vendor/jquery/jquery'
onMounted(async () => {
    await getUser()
    if (role.value == 'user') {
        load()  
    }
})


</script>


<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <!-- <RouterLink class="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">IRS - {{ role }}</div>
        </RouterLink> -->
        <div class="row m-1 mt-4 mb-2">
            <img src="../assets/irs.png" width="100" height="130" alt="" srcset="">
        </div>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <DashboardItem />

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Interface
        </div>

        <!-- Nav Item - Incident Collapse Menu -->
        <IncidentItem v-if="role == 'admin'" />
        <IncidentItemUser v-if="role == 'user'" />

        <!-- Nav Item - Account Collapse Menu -->
        <AccountItemUser v-if="role == 'user'" />
        <!-- Nav Item - Accounts Collapse Menu -->
        <AccountItemAdmin v-if="role == 'admin'" />


        <!-- Nav Item - Settings Menu -->
        <SettingsItem v-if="role == 'admin'" />

        <!-- Nav Item - Activities Menu -->
        <ActivityItem />

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Nav Item - Logout -->
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#logoutModal">
                <i class="fas fa-fw fa-sign-out-alt"></i>
                <span>Logout</span></a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

    </ul>
    <!-- End of Sidebar -->
</template>

<style lang="scss" scoped></style>
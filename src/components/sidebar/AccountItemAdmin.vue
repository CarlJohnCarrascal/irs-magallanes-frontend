<template>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities1"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-users"></i>
                <span>Accounts</span>
            </a>
            <div id="collapseUtilities1" class="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Accounts:</h6>
                    <RouterLink onclick="onclick" class="collapse-item account-profile" id="myprofilepage"
                        to="/account/profile">My Account</RouterLink>
                    <!-- <RouterLink v-if="role == 'admin'" class="collapse-item account-new" to="/account/new">Create Account</RouterLink> -->
                    <RouterLink class="collapse-item account-users" to="/account/user-account">User
                        Account</RouterLink>
                    <!-- <RouterLink class="collapse-item account-pending" to="/account/pending-account">
                        Pending Account</RouterLink> -->
                    <RouterLink class="collapse-item account-deactivated" to="/account/deactivated-account">Deactivated
                        Account</RouterLink>
            </div>
        </div>
    </li>
</template>

<script setup>
import { onMounted } from 'vue';

import side from '../../assets/js/sidebar/side'
const { load } = side()

onMounted(async () => {
    load()
})

</script>

<style lang="scss" scoped>

</style>
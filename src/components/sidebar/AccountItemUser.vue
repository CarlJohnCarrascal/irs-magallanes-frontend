<template>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/account/profile" id="btnDashboard">
                <i class="fas fa-fw fa-user"></i>
                <span>My Account</span>
            </RouterLink>
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
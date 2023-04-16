<template>
<li class="nav-item active d-dashboard">
            <RouterLink class="nav-link" to="/dashboard" id="btnDashboard">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
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
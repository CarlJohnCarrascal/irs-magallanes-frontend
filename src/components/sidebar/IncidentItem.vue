<template>
<li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                aria-controls="collapseTwo">
                <i class="fas fa-fw fa-solid fa-car-crash"></i>
                <span>Incident</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Incidents:</h6>
                    <RouterLink class="collapse-item incident-new" to="/incident/new">New Incident Report</RouterLink>
                    <!-- <RouterLink class="collapse-item incident-today" to="/incident/today">Today</RouterLink> -->
                    <RouterLink class="collapse-item incident-history" to="/incident/history">History</RouterLink>
                    <RouterLink class="collapse-item incident-patient" to="/incident/patient">Patient</RouterLink>
                    <RouterLink class="collapse-item incident-pending" to="/incident/pending">Pending</RouterLink>
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
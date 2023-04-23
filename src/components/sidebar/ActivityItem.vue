<template>
<li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseactivities"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-solid fa-list"></i>
                <span>Activities</span>
            </a>
            <div id="collapseactivities" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Activities:</h6>
                    <RouterLink class="collapse-item activity-notifications" to="/activities/notifications">
                        <i class="fas fa-fw fa-bell"></i>
                        <span> Notifications</span>
                    </RouterLink>
                    <RouterLink class="collapse-item activity-messages d-none" to="/activities/messages">
                        <i class="fas fa-fw fa-envelope"></i>
                        <span> Messages</span>
                    </RouterLink>
                    <!-- <RouterLink class="collapse-item activity-logs" to="/activities/logs">
                            <i class="fas fa-fw fa-list"></i>
                            <span> Activity Log</span>
                        </RouterLink> -->
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
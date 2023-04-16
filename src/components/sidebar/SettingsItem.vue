<template>
<li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsesettings"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-solid fa-cogs"></i>
                <span>Settings</span>
            </a>
            <div id="collapsesettings" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Settings:</h6>
                    <RouterLink class="collapse-item incident-properties" to="/settings/properties">Properties</RouterLink>
                    <RouterLink class="collapse-item account-rules d-none" to="/settings/rules">Rules</RouterLink>
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
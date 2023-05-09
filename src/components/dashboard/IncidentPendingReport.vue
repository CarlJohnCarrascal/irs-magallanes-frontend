<template>
    <!-- Pending Report Card Example -->
    <RouterLink class="col-xl-3 col-md-6 mb-4" role="button" :to="{ name: 'reportpending' }" style="text-decoration: none; color: inherit;">
 <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Reports</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ pending }}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useChart from '../../composables/chart';
const { getReport, report } = useChart()

const pending = ref(0)

onMounted(async () => {
    await getReport()
    pending.value = report.value.pending
})

function showIncidentHistory(){
    //router.replace('/incident/history')
    $(".nav-item").removeClass('active')
    $(".collapse-item").removeClass('active')
    $(".incident-history").addClass("active")
    $(".incident-history").closest('.nav-item').addClass('active')
}

</script>

<style lang="scss" scoped>

</style>
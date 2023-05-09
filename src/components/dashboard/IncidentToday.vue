<template>
    <RouterLink class="col-xl-3 col-md-6 mb-4" role="button" :to="{ name: 'reporthistory', query: { f: 'today' } }" style="text-decoration: none; color: inherit;">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Incident Report Today</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{ today }}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-car-crash fa-2x text-gray-300"></i>
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

const today = ref(0)

onMounted(async () => {
    await getReport()
    today.value = report.value.today
})

</script>

<style lang="scss" scoped>

</style>
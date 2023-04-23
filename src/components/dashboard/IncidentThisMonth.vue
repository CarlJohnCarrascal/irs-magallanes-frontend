<template>
    <!-- Report (Monthly) Card Example -->
    <div class="col-xl-3 col-md-6 mb-4" style="cursor:pointer;" @click="this.$router.replace('/incident/history?f=month')">
        <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Incident Reported This Monthly</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{month}}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-car-crash fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useChart from '../../composables/chart';
const { getReport, report } = useChart()

const month = ref(0)

onMounted(async () => {
    await getReport()
    month.value = report.value.month
})
</script>

<style lang="scss" scoped>

</style>
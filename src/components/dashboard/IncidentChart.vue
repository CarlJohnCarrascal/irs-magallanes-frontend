<template>
    <!-- Area Chart -->
    <div class="card shadow p-0 mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Magallanes Incident Chart Report</h6>
        </div>
        <div class="card-body p-2 overflow-auto">
            <div v-for="i in ca" class="chart-area" id="chartbar">
                <Bar :options="chartOptions" :data="i" />
            </div>
            <hr>
        </div>
    </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


import useChart from '../../composables/chart';
import { onMounted, ref } from 'vue';

const { getBarangay, barangay } = useChart()

const ca = ref([])

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
}

onMounted(async () => {
    await getBarangay()

    var cdata = {
        labels: barangay.value.brgy,
        datasets: [
            {
                data: barangay.value.count,
                backgroundColor: '#f87979',
                label: 'Total Report'
            },
            {
                data: barangay.value.pcount,
                backgroundColor: '#a87979',
                label: 'On Pending'
            }
        ]
    }
    ca.value.push(cdata)

    console.log(ca.value)

})


</script>

<style scoped>
#chartbar {
    min-height: 500px;
}
</style>
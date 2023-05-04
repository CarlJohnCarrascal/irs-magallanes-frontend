<template>
    <!-- Area Chart -->
    <div class="col-md-6 m-0 p-1" v-for="i in ca">
        <div class="card shadow p-0 mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{{ i.datasets[0].label }} Patient Chart</h6>
            </div>
            <div class="card-body p-2 overflow-auto">
                <div class="chart-area" id="chartbar">
                    <Bar :options="chartOptions" :data="i" />
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import useChart from '../../composables/chart';
import { onMounted, ref } from 'vue';

const { getChart, charts } = useChart()

const ca = ref([])

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        ticks: {
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
}

onMounted(async () => {
    await getChart()

    charts.value.forEach(c => {

        var cdata = {
            labels: c.causes,
            datasets: [
            {
                data: c.data,
                backgroundColor: '#f87979',
                label: c.type
            },
            {
                data: c.pdata,
                backgroundColor: '#a87979',
                label: 'On Pending'
            }
        ]
        }
        ca.value.push(cdata)
    })


})

</script>
    

<style scoped>
#chartbar {
    min-width: 400px;
    min-height: 500px;
}
</style>
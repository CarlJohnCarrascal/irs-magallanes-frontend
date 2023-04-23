<template>
    <!-- Area Chart -->
    <div class="col-md-4 m-0 p-0" v-for="i in charts">
        <div class="card shadow p-0 mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">{{ i.type }} Chart Report</h6>
            </div>
            <div class="card-body p-2 overflow-auto">
                <div class="chart-area" id="chartbar">
                    <Bar :options="chartOptions" :data="charts.causes" />
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

import useIncidenType from '../../composables/incidenttype';
import { onMounted, ref } from 'vue';

const { getChart, charts } = useIncidenType()

const ca = ref([])

var d = [];

for (let index = 0; index < 34; index++) {
    d[index] = Math.trunc(Math.random(1, 100) * 100);
}
var d2 = [];
for (let index = 0; index < 34; index++) {
    d2[index] = Math.random(1, 100) * 100;
}

const chartData = {
    labels: ["Aguada Norte", "Aguada Sur", "Aguada Sur", "Aguada Sur", "Aguada Sur", "Aguada Sur", "Aguada Sur"],
    datasets: [{
        data: d,
        backgroundColor: '#f87979',
        label: "Medical Accident"
    }],
};
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y'
}

onMounted( async () => {
    await getChart()

    console.log(charts.value)
})

</script>
    
<style scoped></style>
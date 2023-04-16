<template>
<!-- Area Chart -->
<div class="card shadow p-0 mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Magallanes Incident Chart Report</h6>
    </div>
    <div class="card-body p-2 overflow-auto">
        <div class="chart-area" id="chartbar">
            <Bar 
                :options="chartOptions"
                :data="chartData"/>
        </div>
        <hr>
    </div>
</div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

var d = [];
for (let index = 0; index < 34; index++) {
    d[index] = Math.trunc(Math.random(1,100) * 100);
}
var d2 = [];
for (let index = 0; index < 34; index++) {
    d2[index] = Math.random(1,100) * 100;
}

const chartData = {
        labels: [ "Aguada Norte","Aguada Sur","Anibong","Bacalon","Bacolod","Banacud","Biga","Behia","Binisitahan del Norte","Binisitahan del Sur","Biton","Bulala","Busay","Caditaan","Cagbolo","Cagtalaba","Cawit Extension","Cawit Proper","Ginangra","Hubo","Incarizan","Lapinig","Magsaysay","Malbog","Pantalan","Pawik","Pili","Poblacion","Salvacion","Santa Elena","Siuton","Tagas","Tulatula Norte","Tulatula Sur" ],
        datasets: [ {
             data: d,
             backgroundColor: '#f87979',
             label: "Incident Report"
         }],
      };
const chartOptions = {
        responsive: true,
        maintainAspectRatio: false
      }

</script>

<style scoped>
#chartbar {
    min-width: 850px;
    min-height: 500px;
}

</style>
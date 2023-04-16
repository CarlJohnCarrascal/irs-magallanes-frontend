<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

var d = [];
for (let index = 0; index < 34; index++) {
    d[index] = Math.random(1,100) * 100;
}
var d2 = [];
for (let index = 0; index < 34; index++) {
    d2[index] = Math.random(1,100) * 100;
}

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ "Aguada Norte","Aguada Sur","Anibong","Bacalon","Bacolod","Banacud","Biga","Behia","Binisitahan del Norte","Binisitahan del Sur","Biton","Bulala","Busay","Caditaan","Cagbolo","Cagtalaba","Cawit Extension","Cawit Proper","Ginangra","Hubo","Incarizan","Lapinig","Magsaysay","Malbog","Pantalan","Pawik","Pili","Poblacion","Salvacion","Santa Elena","Siuton","Tagas","Tulatula Norte","Tulatula Sur" ],
        datasets: [ {
             data: d,
             backgroundColor: '#f87979',
             label: "Incident Report"
         }],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
    onMounted:{
        Title
    }
  }
}
</script>

<template>
    
   <div class="container">
    <div class="row text-bg-secondary pt-2">
        <h6>DashBoard</h6>
    </div>
    <div class="row border border-warning-subtle m-1">
        <div class="col col-md-7 col-lg-10 overflow-scroll">
            <div id="chartbar">
                <Bar
                id="my-chart-id"
                :options="chartOptions"
                :data="chartData"
            />
            </div>
            
        </div>
    </div>
   </div>
</template>

<style scoped>

#chartbar {
    max-width: 850px;
    min-width: 850px;
    min-height: 500px;
}

</style>
<template>
  <div class="Pie">
    <PieChart width="250" height="150" type="pie" :options="chartOptions" :series="series"></PieChart>
  </div>
</template>

<script scoped>
import VueApexCharts from 'vue-apexcharts'
export default {
    name : 'pie',
    components : {
        PieChart :  VueApexCharts
    },
    data: function() {
        return{
             series: [44, 55, 13, 43, 22],
        chartOptions: {
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
        }
    
    }
}


</script>




<style scoped>
.Pie{
  width : 250px;
    height : 150px;
    border :1px solid black;
    margin:15px;
     background-color: aliceblue;
}
</style>
<template>
  <div class="LineCom">
    <LineChart width="250" height="150" type="line" :options="chartOptions" :series="series"></LineChart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'LineComp',
  components: {
    LineChart: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [1995, 1998, 2000, 2004, 2006, 2008, 2010, 2014, 2019]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
}
</script>
<style scoped>
.LineCom{
  width : 250px;
    height : 150px;
    border :1px solid black;
    margin:15px;
     background-color: aliceblue;
}
</style>


<template>
<div class="Donut">
<Donut width="250" height="150" type="donut" :options="options" :series="series"></Donut>

</div>
    
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    name : 'donut',
    components : {
        Donut : VueApexCharts,
    },
    data: function() {
        return{
            options :{},
            series : [ 44, 55, 47, 10, 16]

            
        }
    }
    
}
</script>
<style scoped>
.Donut{
  width : 250px;
    height : 150px;
    border :1px solid black;
    margin:15px;
     background-color: aliceblue;
}
</style>


<template>
<div id="weatt">
    <div class="container">
        <div class="w3-display middle">
     <ChartGraph></ChartGraph>
        </div>
    </div>
</div>
    
</template>
<script>
import ChartGraph from '../components/ChartGraph.vue';
export default {
     components :{
         ChartGraph
     }
}
</script>
<style scoped>
#weatt{
  margin-left:34%;
}

</style>
<template>
<div id="weat">
    <Weather></Weather>
</div>
    
</template>
<script>
 import Weather from '../components/Weather.vue'
export default {
     components :{
         Weather
     }
}
</script>
<style scoped>
#weat{
  margin-left:34%;
}

</style>
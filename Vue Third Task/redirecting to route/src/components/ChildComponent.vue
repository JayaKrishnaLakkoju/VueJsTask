<template>
   <div class="child">

       <HelloWorld msg="hey this is child component" />
       

   </div>

    
</template>

<script>
import HelloWorld from 'HelloWorld.vue';
export default {
    name : "ChildComponent",
    components:{ 
        HelloWorld 
        }
    
}
</script>

<style scoped>
.child{
    border:1px solid blue;
}
</style>
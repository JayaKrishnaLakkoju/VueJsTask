<template>

 
    <div class="Login">
        <HelloWorld msg="Login Page" />
    
    username: 
    <input type="text"> <br><br>

    password:
    <input type="password" >

    <br><br>
    <button @click="any()">submit</button>

    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {

    name : "Login",
    components : {
        HelloWorld
    },  
    
    methods :{
       any() {
           this.$router.push('/about');
       }
    }
};
</script>

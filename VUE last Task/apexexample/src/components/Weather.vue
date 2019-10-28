<template>
<div>
      <div class="data">
        <div class="thedata">
        <input type="text" id="country" v-model="b"><br>
        <button id="button" v-on:click="set()">Data</button>
        <br>
        <p>   Country     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  {{ country }}</p>
        <p>   Humidity    &nbsp;&nbsp;:  {{ humidity }}&#37;</p>
        <p>   Temperature &nbsp; :  {{ temperature }}&#176;C</p>
        <p>   Wind        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  {{ wind }}Km/hr</p>
        </div>
       </div>  
       <!-- <wea/> -->
       <!-- <ChartGraph></ChartGraph> -->
</div>
    
</template>

<script>
// import ChartGraph from '../components/ChartGraph.vue';
import axios from 'axios';
export default{
   name: 'weatherapi',
   components:{
      
            // ChartGraph
   },
    data () {
      return {
    
        // weather : '',
        humidity : '',
        country : '',
        temperature : '',
        wind : '',
        b : '',
      }
    },
    methods :{
      set(){
        var a = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var c = '&appid=034a7c72debc648e687b80a0bcfa6d58';
        var url = a + this.b + c;
        axios
        .get(url)
        .then(response =>{
                //  this.weather = response.data;
                 this.country = response.data.name;
                 this.humidity = response.data.main.humidity;
                 this.temperature = response.data.main.temp;
                 this.wind = response.data.wind.speed;
        })

}
}
}  
             

</script>

<style scoped>
.data{
            margin-top:3%;
            margin-left:10%;
            width: 345px;
            height:340px;
            border:1px solid;
            border-radius: 30px;
            padding:75px;
            color:#ffffff;
            background: url('./../assets/thunder.jpg');
            font-weight: 50px;
         

        }
    #button{
      margin-top:3px;
      margin-left:0px;
      width:60px;
      height:27px;
      border-radius:10px;
    }    

    .thedata{
      margin-right:20px;
    
    }
    
    input[type="text"]{
      border-radius: 5px;
      width:200px;
      height: 20px;
      margin:auto;
    }

</style>
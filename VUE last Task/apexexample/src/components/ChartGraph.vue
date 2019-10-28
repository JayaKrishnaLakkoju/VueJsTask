<template>
<div >
    <div id="thisform">
    <form v-on:submit.prevent="theData">
    <input type="text" v-model="bb">
    <br>
<br>
    <button class="w3-button w3-blue" v-on:click="theData">Data</button><br>
    </form>
    </div> <br><br>
    <div class="container">
    <div class="w3-padding-15">
    <!-- <div class="w3-panel w3-yellow" v-show="loading">
       <h2> Loading...</h2>
    </div>   -->
    <div class="loader" v-show="loading"></div>
       <div v-show="chart != null">
         <div id="can">
            <canvas id="theapex" width="300px" height="150px"></canvas>
         </div>  

       </div>
    </div> 
    </div> 
      <!-- <h1 style="color : black"> {{ info }}</h1> -->
</div>
    
</template>

<script>
import Chart from 'chart.js';
import axios from 'axios';
export default {
      name:'ChartGraph',
    //   components:{
        // ChartGraph
    //   },
      data(){
          return{
            chart : null,
              info:null,
           loading : false,
              bb: '',
              // minimumtemperature : [],
              // maximumtemperature : [],
              dates : [],
              temps : []
              
            
          }
      },
      methods : {
          theData: function(){
    //   },
    //   mounted(){

         this.loading = true;

         if(this.chart != null){
           this.chart.destroy();
         }
               var a = 'https://api.openweathermap.org/data/2.5/forecast?q=';
            //    var b = 'Germany';
               var c  = '&appid=034a7c72debc648e687b80a0bcfa6d58';
            
                var url = a +  this.bb + c;
               axios
               .get(url)
               .then(response => {
                   this.info = response.data.city.name;

                   this.dates = response.data.list.map(list =>{
                       return list.main.temp_min; });
                 this.temps = response.data.list.map(list =>{
                       return list.main.temp_max; });
                       
                const cvar = document.getElementById("theapex")
                  this.chart = new Chart(cvar, {
                      type: 'line',
                      data : {
                          labels : this.dates,
                          datasets: [
                              {
                                label : "Temperatures...",
                                 backgroundColor: "rgb(54, 162, 235, 0.5)",
                                  borderColor : "rgb(54, 162, 235)",
                                  fill: false,
                                  data : this.temps
                              }
                          ]
                      },
                      options : {
                          title : {
                              display : true,
                              text : "TEMperature"
                          },
                          tootips :{
                            callbacks:{
                              label : function(tooltipItem, data){
                                var label = data.datasets[tooltipItem.datasetIndex].label || ""
                                 if (label){
                                   label += "; ";
                                 }
                                 label += Math.floor(tooltipItem.yLabel);
                                 return label + "F";
                              }
                            }
                          },
                              scales: {
                xAxes: [
                  {
                    type: "time",
                    time: {
                      // unit: "hour",
                      displayFormats: {
                        hour: "M/DD @ hA"
                      },
                      tooltipFormat: "MMM. DD @ hA"
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Date/Time"
                    }
                  }
                ],
                  yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Temperature"
                    },
                    // ticks: {
                    //   callback: function(value, index, values) {
                    //     return value + "°F";
                    //   }
                    // }
                  }
                ]
                          }
                      }
                  })
                   })
               
          }
      }

}
</script>
<style scoped>
#thisform{
  width:60px;
  height:20px;
  margin-top:4%;
  margin-left:14%;
}
#can{
  width:850px;
  height: 450px;
  /* border:1px solid white; */
  background-color: white;
}

.loader{
   border: 16px solid #f3f3f3;
  border-radius: 25px;
  border-top: 16px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear finite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
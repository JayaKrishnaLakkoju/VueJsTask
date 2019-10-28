<template>
 <div id="allcharts" >
  <div id="container1">
     <div id="Navi" class="w3-container">
         <div class="w3-left">
             <li class="fa fa-home"></li> |
             <a >Leads</a> |
             <a>Organisations</a> |
             <a >Contacts</a> |
             <a>Tickets</a> |
              <a>DashBoard Configuration</a>
         </div>    
         <div class="w3-right">
              <i class="fa fa-facebook"></i> |
              <i class="fa fa-twitter"></i>  |
               <i class="fa fa-google"></i>
          </div> 
     </div>
     <div id="Navi1" class="w3-container  w3-theme-d3">
         <div class="w3-left">
             <!-- <li class="fa fa-home"></li> | -->
             <a>Jay</a>   | 
             <!-- <a >Leads</a> |
             <a>Organisations</a> |
             <a >Contacts</a> | -->
             <a><select >
                 <option value="ALL RECORDS">ALL RECORDS</option>
                 </select></a> |
              <a><input type="text" placeholder="Type Keyword "></a> |
               <button > <i class="fa fa-search"></i></button> |
               <a> Advanced</a>
         </div>    
         <div class="w3-right">
              <!-- <i class="fa fa-facebook"></i> |
              <i class="fa fa-twitter"></i>  | -->
               <i class="fa fa-plus"></i>
          </div>
     </div>
      <div id="Navi2" class="w3-container  w3-theme-d3">
         <div class="w3-left">
             <a>HOME</a>
         </div>    
         <div class="w3-right">
            <select>
                <option value="Add Widget">Add Widget</option>
            </select>
          </div>
     </div>
     <div id="chartboxes" class="container">
         <div class="w3-container" >
               <div class="w3-cell">
                     <div class="w3-container w3-cell">
                           <chart/>
                      </div>   
            
                       <div class="w3-container w3-cell">
                                <Donut/>
                        </div>
               </div>  
         </div>        
         <div class="w3-container">   
                <div class="w3-cell">
                         <div class="w3-container w3-cell">
                           <LineChart/>
                      </div>   
            
                       <div class="w3-container w3-cell">
                                <PieChart/>
                        </div>
                </div>
               
         </div>   
         </div>          
          
        
  </div>
      
</div>

</template>
<script>
import Chart from '../components/ChartComponent.vue'
import Donut from '../components/DoNut.vue'
import LineChart from '../components/LineComponent.vue'
import PieChart from '../components/PieComponent.vue'
export default {
    name:'allcharts',
    components:{
    Donut,
    LineChart,
    PieChart,
    Chart
    // 
    }
}
</script>

<style scoped>
#allcharts{
    width:1000px;
    height:500px;
    background-color: white;
    margin-right:1500px;
        /* margin-left:50px; */
}
#navi{
    width:99%;
    height:4%;
    margin-left:200px;

}

#container1{
    margin-top: 8%;
    /* margin-left: 50px; */
}
#chartboxes{
 margin-left:17%;
 margin-top:2%;
}
a{
    text-decoration: none;
}

</style>
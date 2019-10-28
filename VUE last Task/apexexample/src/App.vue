<template>
  <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/signup">Signup</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/charts">Charts</router-link> |
            <router-link to="/weather">Weather</router-link> |
            <router-link to="/graph">Graph</router-link>
        </div>
    <router-view />
  </div>
</template>

<script>

// import AllCharts from './components/AllCharts.vue'
// import Weather from './components/Weather.vue'
export default {
  name: 'app',
  components:{
    // AllCharts,
    // Weather
  }
}
</script>

<style>

body{
  background-color:white;
  width:97vw;
  height:97vh;
   background: url('./assets/back.jpg');
}

#nav {
  padding: 10px;
  width:100vw;
  height:6vh;
  border:1px solid;
  background-color:#105e62;
}

#nav a {
  font-weight: bold;
  color: white;
  margin-left:30px;

}

#nav a.router-link-exact-active {
  color: black;
  text-decoration: none;
}
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:none;
  /* width:100vw;
  height:100vh;
  border:1px solid black; */
 }
 
</style>

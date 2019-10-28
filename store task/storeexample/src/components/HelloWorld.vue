<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
   {{ count }}<br>
   <button @click="increment()">+</button>
   <!-- <button @click="decrement">-</button> -->
  </div>
</template>

<script>
import store from "../store.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed :{
    count() {
      return store.state.count;
    
    }

  },
  methods : {
    increment(){
      store.commit('increment');
      console.log(increment);
      },
    // decrement(){
    //   store.commit('decrement')
    //   console.log(decrement);
     
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

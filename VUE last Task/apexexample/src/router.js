import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Signup.vue";
import Charts from "./views/Charts.vue";
import Login from "./views/Login.vue";
import Weat from "./views/Weat.vue";
import Graph from "./views/Graph.vue";

Vue.use(Router);
export default new Router({

    routes: [
        // {
        //   path: "/",
        //   name: "home",
        //   components: Home
        // },
        {
          path: "/signup",
          name: "signup",
          component: Signup
        },
        {
          path : "/login",
          name: "login",
          component :Login
    
        },
    
        {
          path:"/charts",
          name:"charts",
          component :Charts
        },
        {
          path:"/weather",
          name:"weather",
          component : Weat
        },
        {
          path:"/graph",
          name:"graph",
          component : Graph
        }

]
});
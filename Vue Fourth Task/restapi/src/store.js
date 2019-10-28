import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
 
  state : {
    question : []

  },
   actions: {
   NewPro : (store, item) => {
     store.commit('OldPro', item)
   }
   },
   mutations : {

    OldPro : (store, item) => {
      store.question =  item
    }

   },
  //  state : {
  //    question : []

  //  },
  getters : {
     question:state => state.question
   }

});

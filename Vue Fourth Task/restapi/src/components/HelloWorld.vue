<template>

 <form>

    <div class="bar">
      <a class="list-icon" v-bind:class="{ 'active': layout == 'list'}" v-on:click=" layout = 'list'"></a>
      <a class="grid-icon" v-bind:class="{ 'active': layout == 'grid'}" v-on:click=" layout = 'grid'"></a>
    
      <button type="button" data-toggle="modal" data-target="#exampleModal">
        Add ANY
      </button>
    </div>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <label><b>Cat</b></label>
            <input type="text" required v-model="q.category"> <br>

            <label><b>Co_A </b></label>
            <input type="text" required v-model="q.correct_answer"><br>

            <label><b>Type</b></label>
            <input type="text" required v-model="q.type"> <br>
            
          </div>
          <div class="modal-footer">
           <button type="button" class="" v-on:click="add(q)">Add in this</button>
            </div></div> </div></div>
     <div class="container" v-if="layout == 'grid'">
          <div class="row">

            <div class="col-md-4 col-xl-4" v-for="(item,index) in question" :key="index">
                <div class="card">
                  <div class="card-body">
                      <p class="card-text">
                         <b>Cat:</b>&nbsp;{{item.category}}
                      </p>
                  <p class="card-text">
                      <b>Co_A:</b>&nbsp;{{item.correct_answer}}
                  </p>
                  <p class="card-text">
                      <b> Type:</b>&nbsp;{{item.type}}
                  </p>
                 <button type="button"  v-on:click="remove(index)">Remove</button>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 <button type="button" data-toggle="modal" data-target="#exampleModal2"
                  v-on:click="edit(item)">Edit</button>
            </div>  </div></div></div></div>

    
    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Update</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
   </div>
  <div class="modal-body">

            <label><b>Category </b></label>
            <input type="text" required v-model="q.category"> <br>

            <label><b>correct_answer </b></label>
            <input type="text" required v-model="q.correct_answer"><br>

            <label><b>Type</b></label>
            <input type="text" required v-model="q.type"> <br>
           
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="update(question)" >Update</button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <table class="table" v-if="layout == 'list'">
        <tr>
          <th>Cate</th>
          <th>Co_A</th>
          <th>type</th>
          <!-- <th>Diffci</th> -->
        </tr>
        <tr v-for="(item,index) in question" :key="index">
          <td>  {{ item.category }}</td>
          <td>  {{ item.correct_answer }}</td>
          <td>  {{ item.type }}</td>
          <!-- <td>  {{ item.difficulty }}</td> -->
        </tr>
      </table>

    </div>
  </form>
</template>

<script>
import store from '../store'
import { mapGetters, mapActions } from 'vuex'
import { log } from 'util';
export default {
  data(){
    return{
    layout: 'grid',
    q : {
      info : null,
      category: null,
      type : null

    }
    }
  },
		
  computed : {
    // question() {
    //   return this.$store.getters.question;
    // }
     ...mapGetters([
         'question'
        ])
  },
      methods: {
        ...mapActions(['NewPro' ]),
	     add(qt) {
      this.question.push(qt);
      this.q = {
        info : null,
        category: null,
        type: null
      }
		
		},
		remove(index){
			this.question.splice(index,1);
		},
		edit(item){
			 console.log(item);
			this.q=item;
		

		},
		update(question){
			console.log(this.question[0].category);
			
    },

},

	mounted() {
		
     fetch('https://opentdb.com/api.php?amount=10').then(response => { return response.json() }).then(data => {console.log(data); 
    //  this.$store.dispatch("NewPro", data.results); })
    this.NewPro(data.results) })
        // this.new_rec = data.results;
  }
    }
</script>



<style>
*{
    margin:0;
    padding:0;
}

 body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
     }

a, a:visited {
    outline:none;
    color:#389dc1;
}

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}



.bar{
    background-color:white;
    border-radius: 2px;
    width: 1080px;
    padding: 10px;
    margin: 45px auto 25px;
    position:relative;
    text-align:right;
    line-height: 1;
}

.bar a{
    background:black center center no-repeat;
    width:32px;
    height:32px;
    display:inline-block;
    text-decoration:none !important;
    margin-right:5px;
    border-radius:2px;
    cursor:pointer;
}

.bar a.active{
    background-color:black;
}

.bar a.list-icon{
    background-image:url(data:image/png;);
}

.bar a.grid-icon{
    background-image:url(data:image/png;);
}

.bar input{
    background:#fff no-repeat 13px 13px;border: none;
    width: 100%;
     line-height: 19px;
    padding: 11px 0;

    border-radius: 2px;
    
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
    outline: none;
    text-indent: 40px;
}
</style>
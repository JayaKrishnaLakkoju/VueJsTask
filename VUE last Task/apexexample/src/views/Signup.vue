<template>
<div class="content">
     <form class="aaa">

      <h3>Sign Up</h3>

     <!-- <label for="Username"> Username:</label>  -->
            <input type="text" id="signupname" v-model="signup.name" maxlength="17" placeholder="Name Here" /><br> 
              
      <!-- <label for="Email">  Email    :    </label> -->
            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2, 3}$]" v-model="signup.email"  placeholder="Email Here" autofocus><br>

      <!-- <label for="Password">Password:</label>  -->
            <input type="password" v-model="signup.password" placeholder="Password Here" autofocus><br>

     <!-- <label for="conform Password">Cnfrm Password:</label>  -->
            <input type="password" v-model="signup.conform" placeholder="Re-Password Here" autofocus><br>

      <!-- <button @click="persist()" id="persist">localStorage</button> -->
      <button v-bind:disabled="!temp" @click="submit()" id="buttonsubmit" type="submit">SUBMIT</button>
        <br><br> <span style="font-size:12px;">Already Signed ? </span> 
        <router-link to="/login"><span class="little">Login</span></router-link><br>
         <i class="fa fa-facebook-square"></i> |
         <i class="fa fa-google-plus"></i> |
           <i class="fa fa-whatsapp"></i>
    </form>  
      <!-- <i class="fa fa-facebook-square"></i> -->
   </div>
  
</template>

<script>
export default{
  data()
  {
    return {
      arr:[],
       temp : true,
      signup : {
      name : '',
      email : '',
      password:'',
      conform:''
      }

    }
  },
  // mounted() {
  //   if (localStorage.this.signup.name) {
  //     this.name = localStorage.this.signup.name;
  //   }
  //    if (localStorage.this.signup.email) {
  //     this.email = localStorage.this.email;
  //   }
  // },

  methods : {
    //  persist(){
    //    localStorage.name = this.signup.name;
    //    localStorage.email = this.signup.email;
    //    localStorage.password = this.signup.password;
    //    localStorage.conform = this.signup.conform;
    //  },


      submit(){
          if(this.signup.name.length > 0 && this.signup.email.length > 0 && this.signup.password.length > 0 && 
          this.signup.conform.length > 0){

               if(this.signup.password == this.signup.conform){
                //  alert("equal");
                // console.log('e')
               }
               else{
                //  alert("not equal");
                // console.log('!e');
               }
               
              this.temp = true;
              localStorage.name = this.signup.name;
              localStorage.email = this.signup.email;
              localStorage.password = this.signup.password;
              localStorage.conform = this.signup.conform;

                // alert(" GONE TO LOCAL STORAGE");
            // localStorage.name = this.signup.name;
            // }
          
            // else{
            //   this.temp = true;
            //   localStorage.name = this.signup.name;
          //   // }
          // }
             }
      }
       
         
        
      
    
  }
   }




</script>

<style scoped>







.content{
  border:1px solid;
  background-color:#003f5c;
  width:300px;
  height:330px;
   border-radius: 30px;
     margin-left:40%;
box-shadow: 3px 3px white;
   margin-top:8%;
}



.aaa{
    
  color:white;
  text-decoration: none;
  align-content: center;
  border-radius: 30px;
width: 300px;
height: 200px;

}
form {
    margin: 0 auto;
    margin-top: 20px;
}
/* label {
    color: white;
    display: inline-block;
    margin-left: 18px;
    padding-top: 10px;
    font-size: 14px;
} */
input[type=password] {
    color: #777;
    padding-left: 10px;
    margin: 10px;
    margin-top: 12px;
    margin-left: 18px;
    width: 200px;
    height: 20px;
    border: 1px solid #c7d0d2;
    border-radius: 4px;
      font-size:12px;
  
}
input[type=email] {
    color: #777;
    padding-left: 10px;
    margin: 10px;
    margin-top: 12px;
    margin-left: 18px;
    width: 200px;
    height: 20px;
    border: 1px solid #c7d0d2;
    border-radius: 4px;
      font-size:12px;
}
input[type=text] {
    color: #777;
    padding-left: 10px;
    margin: 10px;
    margin-top: 12px;
    margin-left: 18px;
    width: 200px;
    height: 20px;
    border: 1px solid #c7d0d2;
    border-radius: 4px;
    font-size:12px;
}
.little{
  color:white;
  text-decoration: none;
  font-size:12px;
  border-radius:4px;
    height: 25px;
    width: 70px;
}
#buttonsubmit{
  border-radius: 10px;
  color:black;
  font-size:13px;
}

#persist{
  font-size:8px;
}
</style>
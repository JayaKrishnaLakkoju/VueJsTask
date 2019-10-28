<template>
     <div class="content">
     <div class="Login">
        <!-- <HelloWorld msg="Login Page" /> -->
    
    <form>
    <h3 style="color:white;">Login</h3><br>
        
    <!-- <label for="username"> username: </label> -->

    <input type="text" placeholder="Login Here" v-model="login.name"> <br>

    <!-- <label for="password">password: </label> -->
    <input type="password" placeholder="Password" v-model="login.password">

    <br><br>
    <button @click="any()" id="logbutton">Login</button><br><br>
    <i class="fa fa-google-plus" style="color:white;"></i>|
    <i class="fa fa-facebook-square" style="color:white;"></i>|
    <i class="fa fa-whatsapp" style="color:white;"></i>
    
    </form>    

    </div>
         <!-- <p> user  {{ login.name }} active now</p> -->
     </div>
</template>

<script>

export default {

    name : "Login",
    components : {
        
        
    },  
    data(){
        return{
            login :{
                name : '',
                password : ''
            }
        }
    },
    
    methods :{
       any() {
           var a = localStorage.getItem('name');
           var b  = localStorage.getItem('password')
           if(this.login.name == a && this.login.password == b){
           alert('User Entered');
           this.$router.push('/charts');
           }
           else{
               this.$router.push('/signup');
           }
        //    this.$router.push('/charts');
       }
    }
};
</script>

<style scoped>

.content{
    border:1px solid;
  background-color:#003f5c;
  width:300px;
  height:300px;
  border-radius: 30px;
  box-shadow:3px 3px white;
  margin-left:40%;
  margin-top:8%;
  margin-right: 20%;
}

#login{
    /* margin-top:20px;
  margin-left: 460px; */
  /* width:30vw;
  height:30vw; */
  /* border:1px solid;
  background-color:#003f5c; */
  color:white;
  text-decoration: none;
  align-content: center;
  border-radius: 30px;
  /* position: fixed; */
width: 340px;
height: 280px;
top: 50%;
left: 50%;
margin-top: -140px;
margin-left: -170px;

}
form {
    margin: 0 auto;
    margin-top: 20px;
}
label {
    color: white;
    display: inline-block;
    margin-left: 18px;
    padding-top: 10px;
    font-size: 14px;
}
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

    /* box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .4), 0 0 0 5px #f5f7f8; */
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
    /* box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .4), 0 0 0 5px #f5f7f8; */
}
#logbutton{

    border-radius:4px;
    height: 25px;
    width: 70px;
}
</style>
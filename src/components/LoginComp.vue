<template>
  <div>
    <div class="container">
             <form class="login" id="loginForm" @submit.prevent="ocultarLogin">
                <h1>LOGIN</h1>
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="email" name="Email" class="form-control" id="Email" ref="inputEmail" v-model="email"  placeholder="Ingrese su email">
                    <br>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="inputPassword" ref="inputPassword" v-model="password" autocomplete="off" placeholder="Ingrese su Password">
                </div>
                <div class="infoSeleccionOff" id="divIngresar">
                    <a @click="goRegister">¿Aun no estas registrado?</a>
                </div>
                <button type="submit" class="btn btn-primary" id="btnContinuar">Continuar</button>
            </form>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable*/
  name: 'LoginComp',
  props: [],
  data(){
    return{
    email: ''  ,
    password: '',
    emailLs: localStorage.getItem("Email"),
    passwordLs: localStorage.getItem("Password")
    }
  },
  methods: {
      goRegister(){
        this.$emit("goRegister")
      },
      ocultarLogin() {
        if (this.email === this.emailLs || this.password === this.passwordLs) {
          this.$emit("ocultarLogin")
        }else {
          alert("Usuario no registrado")
        }
},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 30% !important;
  border: 1px solid black;
  padding: 20px;
  margin-top: 100px;
    border-radius: 15px;

  }
  
#divIngresar {
  width: 100%;
  text-align: center;
}
#divIngresar a:hover{
  background: rgb(218, 218, 218);
  cursor: pointer;
}

#btnContinuar {
  margin-left: 130px;
  margin-bottom: 30px;
  margin-top: 30px;
}
h1 {
  font-size: 20px;
  text-align: center;
}

</style>

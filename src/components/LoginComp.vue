<template>
  <div>
    <div class="container">
             <form class="login" id="loginForm" @submit.prevent="ocultarLogin">
                <h1>LOGIN</h1>
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="email" name="Email" class="form-control" id="Email" ref="inputEmail" v-model="email" autocomplete="off" placeholder="Ingrese su email">
                    <br>
                    <p>Email ingresado: {{email}}</p>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="inputPassword" ref="inputPassword" autocomplete="off" placeholder="Ingrese su Password">
                </div>
                <div class="infoSeleccionOff" id="divIngresar">
                    <input type="checkbox" class="form-check-input" id="checkIngresar" ref="checkIngresar">
                    <label class="form-check-label" for="exampleCheck1">Ingresar con datos guardados</label>
                </div>
                <button type="submit" class="btn btn-primary" id="btnContinuar" >Continuar</button>
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
    email: ''  
    }
  },
  methods: {
      ocultarLogin() {
      this.$emit("ocultarLogin");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 30% !important;
  border: 1px solid black;
  padding: 20px;}
  
#divIngresar {
  width: 100%;
  margin-left: 100px;
}

#btnContinuar {
  margin-left: 140px;
  margin-bottom: 30px;
  margin-top: 30px;
}
h1 {
  font-size: 20px;
  text-align: center;
}

</style>

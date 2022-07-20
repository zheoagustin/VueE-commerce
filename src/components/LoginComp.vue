<template>
  <div>
    <div class="container">
             <form class="login" id="loginForm">
                <h1>LOGIN</h1>
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="email" name="Email" class="form-control" id="Email" autocomplete="off" placeholder="Ingrese su email">

                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="inputPassword" maxlength="8" autocomplete="off" placeholder="Ingrese su Password">
                </div>
                <div class="infoSeleccionOff" id="divIngresar">
                    <input type="checkbox" class="form-check-input" id="checkIngresar">
                    <label class="form-check-label" for="exampleCheck1">Ingresar con datos guardados</label>
                </div>
                <button type="submit" class="btn btn-primary" id="btnContinuar" @click="ocultarLogin">Continuar</button>
            </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComp',
  props: [],
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

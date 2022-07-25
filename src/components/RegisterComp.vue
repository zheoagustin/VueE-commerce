<template>
  <div>
    <form class="container" @submit="validaciones">
      <h2>REGISTRO</h2>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre Completo</label>
        <input
          type="text"
          name="nombre"
          class="form-control"
          v-model="nombre"
          placeholder="Ingrese Nombre Completo"
        />
        <label for="email" class="form-label">Email</label>
        <input type="email" name="email" class="form-control" v-model="email" placeholder="Email"/>
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          v-model="password"
          placeholder="Ingrese contrañesa"
        />
        <label for="rePassword" class="form-label">Re-ingresar </label>
        <input
          type="password"
          name="rePassword"
          class="form-control"
          v-model="rePassword"
          placeholder="Re-Ingrese contraseña"
        />
        <br />
        <button type="submit" class="btn btn-primary">Registrarse</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  /* eslint-disable*/
  name: "RegisterComp",
  props: [],
  data() {
    return {
      nombre: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    validaciones() {
      if (
        this.nombre === "" ||
        this.email === "" ||
        this.password === "" ||
        this.rePassword === ""
      ) {
        return alert("Debes llenar todos los campos");
      } else if (this.rePassword !== this.password) {
        return alert("Las contraseñas deben ser iguales");
      }else {
        alert("Registro exitoso")
        localStorage.setItem("Email", this.email)
        localStorage.setItem("Password", this.password)
        localStorage.setItem("Nombre", this.nombre)

        this.$emit("ocultarRegister")
      }
    },

    //ocultarRegister (){
    //  this.$emit('ocultarRegister')
    //}
  },
};
</script>


<style scoped>
.container {
  width: 50%;
  border: 1px solid black;
  padding: 20px;
  margin-top: 100px;
  border-radius: 15px;
}
</style>

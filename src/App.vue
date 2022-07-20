<template>
  <div id="app">
    <NavComp @ocultarMain="mainFalse" @mostrarMain="mainTrue" />
    <LoginComp v-if="MostrarLogin" @ocultarLogin="btnLogin" />
    <MainComp
      :dato="productos"
      @agregarAlCarrito="agregarAlCarrito"
      v-if="mostrarMain"
    />
    <CarritoComp :carrito="carrito" v-if="mostrarCarrito" />
  </div>
</template>

<script>
import NavComp from "./components/NavComp.vue";
import MainComp from "./components/MainComp.vue";
import LoginComp from "./components/LoginComp.vue";
import CarritoComp from "./components/CarritoComp.vue";

export default {
  name: "App",
  components: {
    NavComp,
    MainComp,
    LoginComp,
    CarritoComp,
  },
  data() {
    return {
      carr: false,
      carrito: [],
      mostrarMain: false,
      mostrarCarrito: false,
      MostrarLogin:true,
    };
  },
  methods: {
    /*eslint-disable*/
    btnLogin(){
      this.MostrarLogin = false
      this.mostrarMain= true
    
    },
    async agregarAlCarrito(prodId) {
      let vm = this
      const cart = await this.carrito.filter(function (prod, i) {
        if (prod.id == prodId) {
         vm.carrito[i].cantidad++
         return prod;
        }
      });

      if (!cart[0]) {
        const item = await this.productos.filter(function (prod) {
          if (prod.id == prodId) {
            return prod;
          }
        });
        item[0].cantidad = 1
        this.carrito.push(item[0]);
      }
      this.mostrarCarrito = false
      setTimeout(()=>{
        vm.mostrarCarrito = true 
      }, 200)
    },
    mainTrue() {
      if (this.mostrarCarrito == false && this.MostrarLogin == false) {
        this.mostrarMain = true;
        this.mostrarCarrito = false
        
      }
    },
    mainFalse() {
      this.mostrarMain = false;
    },
  },
};
</script>

<style>
</style>

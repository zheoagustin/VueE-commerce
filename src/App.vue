<template>
  <div id="app">
    <NavComp @ocultarMain="mainFalse" @mostrarMain="mainTrue" v-if="mostrarNav"/>
    <RegisterComp @ocultarRegister="ocultarRegister" v-if="mostrarRegister"/>
    <LoginComp  @goRegister="goRegister" @ocultarLogin="btnLogin" :valueEmail="valueEmailInput" :class='{none: MostrarLogin == false}'/>
    <MainComp :dato="productos"  @agregarAlCarrito="agregarAlCarrito" @sumarCarrito="agregarAlCarrito" :class='{none: mostrarMain == false, container: mostrarMain == true}' />
    <CarritoComp v-if="mostrarCarritoV" :dato2="productos" :carrito="carrito" :class='{ container: mostrarCarrito == true ,none: mostrarCarrito == false} ' id="carritoPrueba"/>
  </div>
</template>

<script>
import NavComp from "./components/NavComp.vue";
import MainComp from "./components/MainComp.vue";
import RegisterComp from "./components/RegisterComp.vue";
import LoginComp from "./components/LoginComp.vue";
import CarritoComp from "./components/CarritoComp.vue";

export default {
  name: "App",
  components: {
    NavComp,
    MainComp,
    LoginComp,
    CarritoComp,
    RegisterComp
  },
  data() {
    return {
      carr: false,
      carrito: [],
      mostrarMain: false,
      mostrarCarrito: false,
      MostrarLogin:true,
      valueEmailInput: '',
      mostrarCarritoV: '',
      mostrarRegister: false,
      mostrarNav: false
    };
  },
  methods: {
    /*eslint-disable*/
    goRegister(){
      this.mostrarRegister = true
      this.MostrarLogin = false
  },
    ocultarRegister(){
      this.mostrarRegister = false
      this.MostrarLogin = true
    },
    btnLogin(){
      this.MostrarLogin = false
      this.mostrarMain= true    
      this.mostrarCarrito = false
      this.mostrarNav = true
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
      this.mostrarCarritoV = false  
      setTimeout(()=>{
        vm.mostrarCarritoV = true

      }, 10)
    },
        
        
    mainTrue() {
      if (this.MostrarLogin == false) {
        this.mostrarMain = true;
        this.mostrarCarrito = false
        
        
      }
    },
    mainFalse() {
      this.mostrarMain = false;
      this.mostrarCarrito = true

},
  },
};
</script>

<style>
.none {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.container {
  display: block !important;
}

</style>

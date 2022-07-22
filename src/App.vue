<template>
  <div id="app">
    <NavComp @ocultarMain="mainFalse" @mostrarMain="mainTrue" />
    <LoginComp  @ocultarLogin="btnLogin" :valueEmail="valueEmailInput" :class='{none: MostrarLogin == false}'/>
    <MainComp :dato="productos" @agregarAlCarrito="agregarAlCarrito" @sumarCarrito="agregarAlCarrito" :class='{none: mostrarMain == false, container: mostrarMain == true}' />
    <CarritoComp v-if="mostrarCarritoV" :dato2="productos" :carrito="carrito" :class='{ container: mostrarCarrito == true ,none: mostrarCarrito == false} ' id="carritoPrueba"/>
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
      valueEmailInput: '',
      mostrarCarritoV: ''
    };
  },
  methods: {
    /*eslint-disable*/
    btnLogin(){
      this.MostrarLogin = false
      this.mostrarMain= true    
      this.mostrarCarrito = false
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

.container {
  display: block !important;
}

</style>

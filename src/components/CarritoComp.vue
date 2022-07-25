<template>
  <div>
    <div class="Container" id="carritoId">
    <table class="table table-dark table-striped-columns">
      <tr v-for="(item, i) in carrito " :key="i">
        <td >Producto: {{item.producto}}</td>
        <td>Precio: {{item.Precio}}</td>
        <td>Cantidad: {{item.cantidad}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoComp",
  props: ['carrito', 'dato2'],
  data(){
    return{
    }
  },
  methods :{
  }
};
</script>


<style scoped>
.stockCarrito {
  border: 1px solid black;
  margin :30px;
  background: black;
}
#carritoId {
  background: black !important;
}
</style>

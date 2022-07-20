<template>
  <div>
    <div class="Container" id="carritoId">
    <table>
      <tr v-for="(item, i) in carrito " :key="i">
        <td >{{item.producto}}</td>
        <td>{{item.cantidad}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoComp",
  props: ['carrito'],
  data(){
    return{
    }
  },
  methods :{
    
  }
};
</script>


<style scoped>
</style>

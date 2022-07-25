<template>
  <div class="Container">
    <h2>Bienvenido {{ this.nombreCompleto }}</h2>
    <div v-for="(item, i) in dato" :key="i" class="cardCatalogo">
      <div class="card" style="width: 18rem">
        <img class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">Producto: {{ item.producto }}</h5>
          <p class="card-text">Precio: {{ item.Precio }}</p>
          <a
            href="javascript:void(0)"
            class="btn btn-primary"
            @click="agregarAlCarrito(item.id)"
            >Comprar</a
          >
          
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: "MainComp",
  props: ["dato", "id"],
  data() {
    return {
      nombreCompleto: localStorage.getItem("Nombre"),
    };
  },
  methods: {
    agregarAlCarrito(item) {
      this.$emit("agregarAlCarrito", item);
    },
    quitarCarrito(item) {
      this.$emit("quitarCarrito", item);
    },
  },
};
</script>
<style scoped>
.cardCatalogo {
  display: inline-block;
  margin: 25px;
  background-color: white;
}
.card {
  background: white;
  border: 2px solid black;
}
h2 {
  text-align: center;
}
</style>

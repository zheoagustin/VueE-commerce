<template>
  <div class="Container">
    <div v-for="(item, i) in dato" :key="i" class="cardCatalogo">
      <div class="card" style="width: 18rem">
        <img src="" class="card-img-top" alt="" />
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
  methods: {
    agregarAlCarrito (item) {
      this.$emit("agregarAlCarrito", item)

    }
    
  },
};
</script>
<style scoped>
.cardCatalogo {
  display: inline-block;
  margin: 25px;
}
</style>

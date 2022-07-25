<template>
  <div class="">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            class="nav-item nav-link active"
            href="javascript:void(0)"
            id="catalogo"
            @click="mostrarMain"
            >Catalogo <span class="sr-only">(current)</span></a
          >
          <a
            class="nav-item nav-link active"
            href="javascript:void(0)"
            @click="ocultarMain"
            >Carrito</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavComp",
  props: [],
  methods: {
    ocultarMain() {
      this.$emit("ocultarMain");
    },
    mostrarMain() {
      this.$emit("mostrarMain");
    },
  },
};
</script>


<style scoped>
.navbar-nav {
  justify-content: center !important;
  margin: 0px auto !important;
  font-size: 20px;
  background: rgb(218, 218, 218);
}
#navbarNavAltMarkup {
    background: rgb(219, 219, 219);
}
#catalogo:hover {
  background:gray;
  cursor: pointer ;
}

</style>

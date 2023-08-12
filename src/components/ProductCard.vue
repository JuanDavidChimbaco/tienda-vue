<template>
  <div class="container" style="margin-top: 20px">
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card mb-4 shadow-sm">
          <img :src="producto.foto" class="card-img-top foto mx-auto img-fluid" alt="producto Image" />
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p class="card-text">{{ producto.descripcion }}</p>
            <p class="card-text">Precio: ${{ producto.precio }}</p>
            <button class="btn btn-primary" @click="agregarAlCarrito">Comprar</button>
            <button class="btn btn-secondary" @click="goToCart">Ir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
  methods: {
    agregarAlCarrito() {
      this.$emit("agregar-al-carrito", this.producto);
    },
  },
};
</script>


<style scoped>
.foto {
  height: 200px;
  width: 200px;
  margin: 5px;
  border-radius: 5px;
}

.card {
  transition: transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Elevación y sombra */
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Elevación y sombra al hacer hover */
}

button {
  margin: 5px;
}
</style>

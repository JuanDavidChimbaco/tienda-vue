<template>
  <div class="container" style="margin-top: 20px">
    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card mb-4 shadow-sm">
          <img
            :src="product.foto"
            class="card-img-top foto mx-auto img-fluid"
            alt="Product Image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.nombre }}</h5>
            <p class="card-text">{{ product.descripcion }}</p>
            <p class="card-text">Precio: ${{ product.precio }}</p>
            <button class="btn btn-primary" @click="addToCart(product)">
              Comprar
            </button>
            <button class="btn btn-secondary" @click="goToCart">
              Ir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // Hacer la llamada a tu API utilizando Axios
      axios
        .get("http://127.0.0.1:8000/api/v1.0/productos")
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addToCart(product) {
      // Lógica para agregar el producto al carrito
      console.log("Producto agregado al carrito:", product);
    },
    goToCart() {
      // Lógica para redirigir al carrito
      console.log("Redirigiendo al carrito");
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
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button{
  margin: 5px;
}
</style>

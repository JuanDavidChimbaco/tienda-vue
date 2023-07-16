<template>
    <div>
        <div class="row">
          <div class="col-md-4" v-for="product in products" :key="product.id">
            <div class="card">
              <img :src="product.image" class="card-img-top" alt="Product Image">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <p class="card-text">Precio: {{ product.price }}</p>
                <button class="btn btn-primary" @click="addToCart(product)">Comprar</button>
                <button class="btn btn-secondary" @click="goToCart">Ir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // Hacer la llamada a tu API utilizando Axios
      axios.get('https://tu-api.com/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addToCart(product) {
      // Lógica para agregar el producto al carrito
      console.log('Producto agregado al carrito:', product);
    },
    goToCart() {
      // Lógica para redirigir al carrito
      console.log('Redirigiendo al carrito');
    }
  }
}
  
  </script>
  
  <style scoped>
  /* Estilos CSS específicos para el componente ProductCard.vue */
  </style>
  
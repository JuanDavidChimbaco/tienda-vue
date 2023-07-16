<template>
  <div id="app">
    <HeaderComponent/>
    <NavigationComponent />

    <main>
      <div class="product-list">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </main>

    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import ProductCard from './components/ProductCard.vue';
import FooterComponent from './components/FooterComponent.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationComponent,
    ProductCard,
    FooterComponent,
  },
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
      // Aquí puedes agregar tu lógica para obtener los productos desde una API o donde sea necesario
      // Por ahora, utilizaré datos de ejemplo para mostrar el concepto
      this.products = [
        { id: 1, name: 'Producto 1' },
        { id: 2, name: 'Producto 2' },
        { id: 3, name: 'Producto 3' },
        { id: 4, name: 'Producto 4' },
        { id: 5, name: 'Producto 5' },
        { id: 6, name: 'Producto 6' },
      ];
    },
  },
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1;
}
</style>

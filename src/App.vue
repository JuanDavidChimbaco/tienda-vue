<template>
  <div id="app">
    <HeaderComponent />
    <NavigationComponent />
    <div class="d-flex justify-content-center">
      <button @click="mostrarCarrito = !mostrarCarrito" class="btn btn-outline-dark">
        <i class="fas fa-regular fa-cart-shopping fa-2xl"></i> Mostrar Carrito
      </button>
    </div>
    <CarouselComponent />

    <main>
      <div class="container">
        <div class="row">
          <ProductCard v-for="producto in productos" :key="producto.id" :producto="producto" @agregar-al-carrito="agregarAlCarrito"/>
          <CarouselProducts />
          <ComentariosComponent />
        </div>
      </div>
    </main>

    <FooterComponent />
    <CartComponent :show="mostrarCarrito" :carrito="carrito" @eliminar-del-carrito="eliminarDelCarrito" />

    <InicioSesion v-if="mostrarIniciarSesion" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import NavigationComponent from "./components/NavigationComponent.vue";
import ProductCard from "./components/ProductCard.vue";
import FooterComponent from "./components/FooterComponent.vue";
import CarouselComponent from "./components/CarouselComponent.vue";
import CarouselProducts from "./components/CarouselProducts.vue";
import ComentariosComponent from "./components/ComentariosComponent.vue";
import InicioSesion from "@/components/InicioSesionComponent";
import CartComponent from "@/components/CartComponent.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderComponent,
    NavigationComponent,
    ProductCard,
    FooterComponent,
    CarouselComponent,
    CarouselProducts,
    ComentariosComponent,
    InicioSesion,
    CartComponent,
  },
  data() {
    return {
      productos: [], // Inicializa la propiedad productos con un array vacío
      carrito: [],
      mostrarCarrito: false,
      mostrarIniciarSesion: false,
    };
  },
  created() {
    this.fetchProductos(); // Llamamos a la función para obtener los productos al cargar el componente
  },
  methods: {
    async fetchProductos() {
      try {
        // Llamada a la API utilizando Axios para obtener los productos
        const response = await axios.get("http://exoticshoes.pythonanywhere.com/api/v1.0/productos");
        this.productos = response.data; // Actualizamos el array de productos con los datos de la API
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    },
    agregarAlCarrito(producto) {
      this.carrito.push(producto);
    },
    eliminarDelCarrito(idProducto) {
      this.carrito = this.carrito.filter((producto) => producto.id !== idProducto);
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1;
  background-color: #eeeeee;
}
</style>
<template>
  <div id="app">
    <HeaderComponent/>
    <NavigationComponent />
    <div class="d-flex justify-content-center">
      <button @click="mostrarCarrito = !mostrarCarrito" class="btn btn-outline-dark">
        <i class="fas fa-regular fa-cart-shopping fa-2xl"></i> Mostrar Carrito
      </button>
    </div>
    <CarouselComponent/>
    
    <main>
      <div class="container">
        <div class="row">
          <ProductCard @agregar-producto="agregarProductoAlCarrito"/>
          <CarouselProducts/>
          <ComentariosComponent/>
        </div>
      </div>
    </main>
    
    <FooterComponent/>
    <Carrito 
      :productos="productos" 
      @eliminar-producto="eliminarProductoDelCarrito"
      :class="{mostrar:mostrarCarrito}" />


    <InicioSesion v-if="mostrarIniciarSesion" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import ProductCard from './components/ProductCard.vue';
import FooterComponent from './components/FooterComponent.vue';
import CarouselComponent from './components/CarouselComponent.vue'
import CarouselProducts from './components/CarouselProducts.vue';
import ComentariosComponent from './components/ComentariosComponent.vue';
import InicioSesion from '@/components/InicioSesionComponent';
import Carrito from '@/components/CartComponent.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavigationComponent,
    ProductCard,
    FooterComponent,
    CarouselComponent,
    CarouselProducts,
    ComentariosComponent,
    InicioSesion,
    Carrito,
},
  methods: {
    agregarProductoAlCarrito(producto) {
      this.$refs.carrito.agregarProducto(producto);
    },
    eliminarProductoDelCarrito(idProducto) {
      this.$refs.carrito.eliminarProducto(idProducto);
    },
  },
  data() {
    return {
      mostrarCarrito: false,
      mostrarIniciarSesion: false,
    };
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
  background-color: #eeeeee;
}
</style>
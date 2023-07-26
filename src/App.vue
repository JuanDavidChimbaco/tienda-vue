<template>
  <div id="app">
    <HeaderComponent/>
    <NavigationComponent />

    <main>
      <div class="container-fluid">
        <div class="row">
          <ProductCard />
        </div>
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

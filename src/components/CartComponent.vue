<template>
  <div class="carrito" v-if="carrito.length > 0"> <!-- Verifica si se han cargado los productos -->
    <h2>Carrito de Compras</h2>
    <ul>
      <li v-for="producto in carrito" :key="producto.id">
        {{ producto.nombre }} - ${{ producto.precio }}
        <button @click="eliminarDelCarrito(producto.id)">Eliminar</button>
      </li>
    </ul>
    <p>Total: ${{ calcularTotal() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    carrito: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    eliminarDelCarrito(idProducto) {
      this.$emit("eliminar-del-carrito", idProducto);
    },
    calcularTotal() {
      return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    },
  },
};
</script>

<style>
/* Estilos para el carrito */
.carrito {
  position: fixed;
  top: 0;
  right: -400px; /* Inicialmente, el carrito estará oculto fuera de la pantalla */
  width: 400px;
  height: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  transition: right 0.3s ease; /* Agregamos una transición suave para animar la aparición/desaparición del carrito */
}

.carrito.mostrar {
  right: 0; /* Cuando la clase "mostrar" está presente, el carrito se desplaza hacia la posición derecha 0 */
}
</style>


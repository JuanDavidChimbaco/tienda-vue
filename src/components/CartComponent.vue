<template>
  <div>
    <div class="cart-container">
      <div class="cart-content">
        <!-- Contenido del Carrito -->
        <h2 class="cart-title">Carrito de compras</h2>
        <!-- Agrega aquí el contenido del carrito de compras -->
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
/* Estilos para el carrito de compras */
.cart-container {
  background-color: #ff0000;
  border: 1px solid #5e5e5e;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999; /* Para que esté encima de todo */
  display: none; /* Oculto por defecto */
}

.cart-container.visible {
  display: block; /* Mostrar cuando showComponent sea true */
}

.cart-title {
  text-align: center;
  color: #333;
}

.cart-content {
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.6;
}

/* Estilos para el botón de cerrar */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
}
</style>
  
<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4 text-center marquee-container">
          <div class="marquee-content">
            <div>
              <h1 class="title">Exotic Shoes</h1>
            </div>
            <div>
              <h1 class="title">Exotic Shoes</h1>
            </div>
          </div>
        </div>
        <div class="col-4 text-right">
          <p class="phone">
            <i class="fas fa-regular fa-phone"></i> 316 7599628
          </p>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script>
export default {
};
</script>
  
<style>
.header {
  height: 5%;
  background-color: #1a1a1a;
  position: static;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #b1b1b1;
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.phone {
  font-size: 10px;
  color: #b1b1b1;
  margin: 0;
}

.marquee-container {
  overflow: hidden; /* Ocultar el contenido que se desborda */
  position: relative; /* Establecer posición relativa para posicionar el contenido dentro */
  height: 2rem; /* Ajustar la altura según sea necesario */
}

.marquee-container .marquee-content {
  position: absolute; /* Establecer posición absoluta para desplazarse fuera del contenedor */
  animation: marquee 5s linear infinite; /* Agregar animación */
  overflow: hidden;
  width: 200%;
}

.marquee-container .marquee-content div {
  float: left;
  width: 50%;
}

@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}

</style>
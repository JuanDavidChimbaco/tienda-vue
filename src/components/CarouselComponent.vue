<template>
    <div
      id="carouselExampleIndicators"
      class="carousel slide p-3"
      data-bs-ride="carousel"
      style="background-color: rgb(253, 196, 255); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          v-for="(slide, index) in slides"
          :key="index"
          :data-bs-slide-to="index"
          :class="{ active: index === currentSlide }"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: index === currentSlide }"
        >
          <img :src="slide.image" class="d-block w-100" :alt="`Slide ${index + 1}`" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>

    
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [
          {
            image: "https://images.vexels.com/media/users/3/195907/raw/737ef4353c5b1055ddfe4f08bd50b8be-tienda-online-german-web-slider.jpg",
          },
          {
            image: "https://images.vexels.com/media/users/3/194733/raw/09e8c94ee143ff718334f2ddc0ecd330-compra-online-deslizador-web-de-neon.jpg",
          },
          {
            image: "https://images.vexels.com/media/users/3/196481/raw/180e3280e0efdd4f24ac7e27688d1374-plantilla-de-control-deslizante-en-linea-de-mega-venta.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .carousel-item {
    height: 400px;
  }
  </style>
  
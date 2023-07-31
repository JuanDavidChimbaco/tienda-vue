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
            image: "https://via.placeholder.com/800x400?text=Slide+1",
          },
          {
            image: "https://via.placeholder.com/800x400?text=Slide+2",
          },
          {
            image: "https://via.placeholder.com/800x400?text=Slide+3",
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
  
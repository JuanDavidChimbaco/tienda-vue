<template>
    <div class="container mt-4">
        <div class="carousel">
            <h1>Ofertas</h1>
            <div class="carousel-inner" style="overflow-x: hidden;">
                <div class="carousel-item" v-for="(product, index) in products" :key="product.id"
                    :class="{ active: index === activeIndex }">
                    <div class="card mb-4 shadow-sm rounded">
                        <div class="image-container">
                            <img :src="product.foto" class="card-img-top foto" alt="Product Image" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ product.nombre }}</h5>
                            <p class="card-text">{{ product.descripcion }}</p>
                            <p class="card-text">Precio: ${{ product.precio }}</p>
                            <button class="btn btn-primary" @click="addToCart(product)">
                                Comprar
                            </button>
                            <button class="btn btn-secondary" @click="goToCart">
                                Ir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" @click="prevSlide">
                <i class="fas fa-chevron-left"></i> <!-- Icono de flecha izquierda -->
            </a>
            <a class="carousel-control-next" @click="nextSlide">
                <i class="fas fa-chevron-right"></i> <!-- Icono de flecha derecha -->
            </a>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            products: [],
            activeIndex: 0,
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            axios
                .get("http://127.0.0.1:8000/api/v1.0/productos")
                .then((response) => {
                    this.products = response.data;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        addToCart(product) {
            // Lógica para agregar el producto al carrito
            console.log("Producto agregado al carrito:", product);
        },
        goToCart() {
            // Lógica para redirigir al carrito
            console.log("Redirigiendo al carrito");
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.products.length) % this.products.length;
        },
        nextSlide() {
            this.activeIndex = (this.activeIndex + 1) % this.products.length;
        },
    },
};
</script>
  
<style scoped>
.carousel {
    position: relative;
}

.carousel-inner {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

.carousel-item {
    flex: 0 0 auto;
    scroll-snap-align: start;
}

.carousel-item.active {
    border: 1px solid #ced4da;
}

.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    color: #007bff;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5;
    text-decoration: none;
    border: 1px solid #007bff;
    border-radius: 50%;
    background-color: transparent;
}

.carousel-control-prev {
    left: 0;
}

.carousel-control-next {
    right: 0;
}

.foto {
    height: 200px;
    width: 200px;
    margin: 5px;
    border-radius: 5px;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
    text-align: center;
}

button {
    margin: 5px;
}</style>
  
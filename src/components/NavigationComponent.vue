<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/Logo1.png" alt="Logo" class="logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Productos</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>

          <li class="nav-item dropdown" @mouseover="showDropdown" @mouseout="hideDropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click="toggleDropdown"
            >Categorías</a>
            <ul class="dropdown-menu" :class="{ 'show': dropdownOpen }">
              <li v-for="category in categories" :key="category.id">
                <a class="dropdown-item" href="#">{{ category.nombre }}</a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>

        <div class="dropdown mx-2 dropstart">
          <button
            type="button"
            class="btn btn-outline-dark dropdown-toggle-no-arrow"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <i class="fa-regular fa-user fa-2xl"></i>
          </button>

          <form
            class="dropdown-menu p-4 dropdown-menu-right dropdown-menu-clickable"
            @click="stopPropagation">
            <div class="mb-3">
              <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                <label class="form-check-label" for="dropdownCheck2">Remember me</label>
              </div>
            </div>
            <button type="submit" class="btn btn-secondary">Sign in</button>
          </form>
        </div>

        <div class="mx-2">
          <button class="btn btn-outline-dark" @click="toggleComponent">
            <i class="fas fa-regular fa-cart-shopping fa-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <div v-if="showComponent">
    <CartComponent />
  </div>
  
</template>
  
<script>
import axios from "axios";
import { ref } from 'vue';
import CartComponent from "/src/components/CartComponent.vue";
//de nada xD

export default {
  data() {
    return {
      scrolled: false,
      dropdownOpen: false,
      categories: [],
    };
  },
  components: {
    CartComponent,
  },
  mounted() {
    this.fetchCategories();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    fetchCategories() {
      axios
        .get("http://127.0.0.1:8000/api/v1.0/categorias")
        .then((response) => {
          console.log(response.data);
          this.categories = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleScroll() {
      // Verificamos la posición de desplazamiento vertical
      this.scrolled = window.scrollY > 0;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    showDropdown() {
      this.dropdownOpen = true;
    },
    hideDropdown() {
      this.dropdownOpen = false;
    },
    stopPropagation(event) {
      event.stopPropagation();
    },
  },
  setup() {
    const showComponent = ref(false);

    function toggleComponent() {
      showComponent.value = !showComponent.value;
    }

    return {
      showComponent,
      toggleComponent,
    };
  },
};
</script>
  
<style scoped>
.logo {
  height: 60px;
  border-radius: 100%;
}
.dropdown-menu {
  max-height: auto; /* Ajusta el valor según la preferencia */
  overflow-y: auto;
}
.container-fluid{
  background: rgb(253 196 255);
}
/* Estilo para el navbar cuando se desplaza */
/* Estilo para el navbar cuando se desplaza */
.navbar-scrolled {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f9f9f9; /* Agrega el color de fondo que desees */
  /* Agrega cualquier otro estilo deseado para el navbar cuando se desplaza */
}

/* Estilos para el contenedor del contenido de la página */
.container {
  margin-top: 70px; /* Ajusta este valor para dejar espacio para el navbar */
}
</style>
  
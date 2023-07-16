<template>
    <header class="header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4 text-center">
            <marquee behavior="" direction="left">
              <h1 class="title">Exotic Shoes</h1>
            </marquee>
          </div> 
          <div class="col-4 text-right">
            <p class="phone"><i class="fas fa-regular fa-phone"></i> 316 7599628</p>
          </div>
        </div>
      </div>
    </header>
</template>
  
<script>
  export default {
    // Lógica del componente
  }
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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  .phone {
    font-size: 10px;
    color: #b1b1b1;
    margin: 0;
  }
</style>
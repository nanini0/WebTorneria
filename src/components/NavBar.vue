<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div class="main-content" style="padding-top: 80px;"></div>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="32" 
    height="32" 
    fill="currentColor" 
    class="bi bi-nut-fill spinning-icon" 
    viewBox="0 0 16 16"
  >
    <path d="M4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1zm5.018 9.696a3 3 0 1 1-3-5.196 3 3 0 0 1 3 5.196"/>
  </svg>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/">Inicio</router-link>
        </li>
        
        <li class="nav-item">
           <router-link class="nav-link" active-class="active" to="/nosotros">Nosotros</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/servicios">Servicios</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/preguntas">preguntas Frecuentes</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="false">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.navbar-nav .nav-link {
  font-size: 1.2rem; /* Tamaño base aumentado (equivalente a ~19px) */
}
.navbar-nav .nav-item {
  padding: 0 12px;
}
.spinning-icon {
  animation: spin 2s linear infinite; /* Gira indefinidamente en 2 segundos */
  transform-origin: center; /* Rota desde el centro (opcional pero recomendado) */
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
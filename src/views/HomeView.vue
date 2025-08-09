<template>

  <div style="margin-top: 100px; text-align: center; padding: 30px;">
    <h1>Bienvenidos a tu lugar de confianza</h1>
    <h3>la excelencia no se pierde</h3>
  </div>
  <div class="container "  >
    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">

      <!-- Card izquierda -->
      <div class="card" style="width: 24rem; gap: auto;">
        <img :src="t1" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Texto de ejemplo para la tarjeta izquierda.</p>
        </div>
      </div>

      <!-- Carrusel centro -->
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="width: 100%; max-width: 30rem;">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="t2" class="d-block w-100" alt="Imagen 1" />
          </div>
          <div class="carousel-item">
            <img :src="t2" class="d-block w-100" alt="Imagen 2" />
          </div>
          <div class="carousel-item">
            <img :src="t2" class="d-block w-100" alt="Imagen 3" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Card derecha -->
      <div class="card" style="width: 24rem;">
        <img :src="t3" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Texto de ejemplo para la tarjeta derecha.</p>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>
    import t1 from '@/imagenes/t1.jpg'
    import t2 from '@/imagenes/t2.jpg'
    import t3 from '@/imagenes/t3.jpg'
</script>
<style  scoped>
.container {
  max-width: 100%;
  padding: 2rem 1rem;
  min-height: 100vh; /* que cubra el alto inicial */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa; /* Fondo gris claro profesional */
}

.d-flex {
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}

.card {
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-text {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.4;
}

/* Carrusel central */
.carousel {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}

.carousel img {
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

/* Controles del carrusel */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
}

/* Responsive para pantallas pequeñas */
@media (max-width: 768px) {
  .container {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .card img {
    height: 160px;
  }

  .carousel img {
    aspect-ratio: 16 / 9;
  }
}

   
</style>
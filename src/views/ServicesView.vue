<template>
  <div class="container">
    <div class="card text-bg-dark">
      <img :src="s1" class="card-img" alt="Imagen de card">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card text-bg-dark">
      <img :src="s2" class="card-img" alt="Imagen de card">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card text-bg-dark">
      <img :src="s3" class="card-img" alt="Imagen de card">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import s1 from '@/imagenes/service1.jpg'
import s2 from '@/imagenes/service2.jpg'
import s3 from '@/imagenes/service3.jpg'


</script>

<style scoped>
.container {
   
  display: flex;
  flex-direction: row; /* Cambiado a fila */
  flex-wrap: wrap; /* Permite el salto de línea */
  justify-content: center; /* Centra las cards horizontalmente */
  align-items: stretch; /* Estira las cards a misma altura */
  gap: 2rem; /* Espacio entre cards */
  padding: 2rem;
  margin: 250px;
  width: 100%;
  max-width: 1400px; /* Aumentado para acomodar más cards */
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: none;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 350px; /* Ancho fijo para cada card */
  height: 400px; /* Altura aumentada */
  flex: 1 1 300px; /* Flexibilidad: base 300px, puede crecer */
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  transition: transform 0.5s ease; /* Transición suave para hover */
}

.card-img-overlay {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Texto al fondo de la card */
  color: white;
  padding: 2rem;
  z-index: 2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%); /* Degradado para mejor legibilidad */
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* Efecto hover mejorado */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.card:hover .card-img {
  transform: scale(1.05); /* Efecto zoom suave */
}

/* Responsive para tablets */
@media (max-width: 1024px) {
  .card {
    max-width: 300px;
    height: 350px;
  }
}

/* Responsive para móviles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  
  .card {
    max-width: 100%;
    height: 300px;
    flex: 1 1 auto;
  }
}
</style>
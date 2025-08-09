<template>

  <div class="container">
    
    <!-- Aquí va lo que tú quieras arriba -->
    <div class="contenido-arriba">
      <h1>Esto es contenido arriba</h1>
      <p>Puedes poner lo que quieras aquí.</p>
    </div>

    <!-- Sección azul -->
    <section class="seccion-azul">
  <!-- Imagen de fondo -->
  <div class="fondo-imagen">
    <img :src="ejemplo3" alt="Fondo" />
  </div>

  <!-- Contenido encima de la imagen -->
  <div class="contenido-superpuesto">
    <h2>NOSOTROS</h2>
    <p>Calidad certificada y precisión de nivel superior respaldadas por nuestros clientes satisfechos.</p>

    <div class="grupo-imagen">
      <img  style="height: 200px" :src="logo" alt="Equipo" />
    </div>

    <div class="beneficios-lista">
      <div class="tuerca-derecha">
        <img :src="gg1" />
      </div>
      <div class="columna">
        <p>✅ <strong>Experiencia y precisión</strong> – Más de 25 años fabricando y reparando piezas complejas.</p>
        <p>✅ <strong>Calidad garantizada</strong> – Materiales y procesos de alto estándar.</p>
        <p>✅ <strong>Rapidez y eficiencia</strong> – Entregas puntuales y optimizadas.</p>
      </div>
      <div class="columna">
        <p>✅ <strong>Compromiso y atención personalizada</strong> – Servicio confiable y adaptado a tus necesidades.</p>
        <p>✅ <strong>Versatilidad industrial</strong> – Soluciones para diversas industrias.</p>
        <p>✅ <strong>Durabilidad y resistencia</strong> – Piezas diseñadas para un rendimiento óptimo y una larga vida útil.</p>
      </div>
      <div class="tuerca-izquierda">
        <img :src="gg1" />
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script setup>
    import gg1 from '@/imagenes/gg1.png'
    import ejemplo2 from '@/imagenes/ejemplo2.png'
    import ejemplo3 from '@/imagenes/ejemplo3.png'
    import logo from '@/imagenes/logo.png'
</script>

<style scoped>


.seccion-azul {
  font-size: 18px; /* Tamaño base aumentado */
  position: relative;
  background-color: #03104a;
  color: white;
  padding: 100px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
  border-bottom-left-radius: 500px; border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  border-bottom-right-radius: 500px;
  overflow: hidden;
   width: calc(100vw - 40px); /* 20px de margen a cada lado */
  margin-left: calc(-50vw + 50% + 20px);
  margin-bottom: 300px;
}

/* Imagen de fondo */
.fondo-imagen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.fondo-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25; /* puedes ajustar si quieres más contraste */
}

/* Contenido principal */
.contenido-superpuesto {
  position: relative;
  z-index: 3;
}

.grupo-imagen img {
  max-width: 100%;
  height: auto;
 
}

.beneficios-lista {
  font-size: 18px; /* Tamaño base aumentado */
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  
}

.columna {
  max-width: 350px;
  text-align: left;
}

.columna p {
  font-size: 14px;
}

/* Tuercas posicionadas detrás */
.tuerca-izquierda,
.tuerca-derecha {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: auto;
  z-index: 1; /* detrás del texto */
  opacity: 0.8; /* opcional: un poco translúcidas */
  pointer-events: none; /* no interfieren con clics o selección */
}

.tuerca-izquierda {
  left: 5vw; /* usa % para adaptarse a tamaño de pantalla */
}

.tuerca-derecha {
  right: 10vw;
}

/* Ocultar tuercas en pantallas pequeñas */
@media (max-width: 768px) {
  .tuerca-izquierda,
  .tuerca-derecha {
    display: none;
  }
}
   
</style>
<template>
    <section class="seccion-faq">
  <h2>Preguntas Frecuentes</h2>
  
  <div class="pregunta">
    <h3>¿Cuánto tiempo tardan en fabricar las piezas?</h3>
    <p>El tiempo de fabricación varía según la complejidad, pero normalmente entregamos en un plazo de 7 a 15 días hábiles.</p>
  </div>
  
  <div class="pregunta">
    <h3>¿Qué materiales utilizan en sus productos?</h3>
    <p>Trabajamos con aceros de alta resistencia, aleaciones especiales y materiales compuestos según los requerimientos de cada pieza.</p>
  </div>
  
  <div class="pregunta">
    <h3>¿Ofrecen garantía en sus productos?</h3>
    <p>Sí, todas nuestras piezas tienen garantía de 1 año contra defectos de fabricación.</p>
  </div>
  
  <div class="pregunta">
    <h3>¿Pueden fabricar piezas personalizadas?</h3>
    <p>Absolutamente. Especializamos en soluciones a medida según los planos o especificaciones del cliente.</p>
  </div>
  
  <div class="pregunta">
    <h3>¿Cómo puedo solicitar un presupuesto?</h3>
    <p>Puedes contactarnos por teléfono, email o completando nuestro formulario web. Necesitaremos los planos o especificaciones técnicas.</p>
  </div>
</section>
</template>

<script setup>

</script>

<style  scoped>
.seccion-faq {
  background-color: #f8f9fa;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 100px auto;
}

.seccion-faq h2 {
  text-align: center;
  color: #03104a;
  margin-bottom: 40px;
  font-size: 2rem;
}

.pregunta {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.pregunta h3 {
  color: #03104a;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.pregunta p {
  color: #555;
  line-height: 1.6;
}

/* Efecto hover opcional */
.pregunta:hover {
  transform: translateY(-3px);
  transition: transform 0.3s ease;
}
</style>
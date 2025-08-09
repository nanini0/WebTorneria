<template>
    <div>
        <div class="Container" style="padding: 100px; text-align: center; ">
            <h1>¿Cómo contactarnos? ¡Aquí te lo explicamos!</h1>
            <div style="display: flex; justify-content: center; gap: 200px; box-shadow: 0cap; margin-top: 100px;">
               
                

                <p style="width: 300px; text-align: justify; padding: 5%; box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.3);">
                Para obtener más información sobre productos y precios, o para preguntar por piezas, entre otros trabajos por teléfono, contactanos llamando al 000-000-000-1111 o +56911111111.</p>
 <div>
                <img :src="Contacto" style="height: 300px;"></img>
                <p>ESTAMOS PARA AYUDARTE</p>
                <button onclick="window.location.href='#maps'"  type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Ubicación Maps</button>
                </div> 
                <p  class="texto-formateado" style="width: 300px; text-align: center; padding: 5%; box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.3);">
                Síguenos en nuestras redes sociales. <br><br>
                ➡️ nuestra pagina de Facebook: <a href="">aqui</a> <br><br>
                ➡️ nuestra pagina de Instagram: <a href="">aqui</a> <br><br>
                ➡️ Mensaje WhatSapp directo: <a href="">aqui</a>
             </p>
            </div>
            <h1 style=" padding-top: 70px; box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.3);">Ubicación</h1>
            <div class="map" style=" margin-top: 100px; display: flex; justify-content: center;;">
                
                
                <p style="background-color: #1A73E8; text-align: justify;margin-right: 200px; width: 300px; height: 250px; padding: 30px; color: whitesmoke;">Nuestro establecimiento Rodry K se encuentra ubicado en pleno centro de Concepción, en la calle Arturo Prat 944, comuna 4030558, Región del Bío Bío. Esta céntrica ubicación ofrece fácil acceso desde distintos puntos de la ciudad,</p>
            
                <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.0791181176905!2d-73.06160756678153!3d-36.825579500672966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5c2d0c018c3%3A0x6e888440c88e7c1!2sRodry%20K!5e0!3m2!1ses-419!2scl!4v1754762686289!5m2!1ses-419!2scl" width="600" height="450" style="  width: 500px;height: 400px; border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import Contacto from '@/imagenes/gg2.png'
</script>

<style  scoped>
    .texto-formateado {
  line-height: 1.6;       /* Espacio entre líneas */
  text-align: justify;    /* Texto alineado a ambos lados */
  padding: 15px;         /* Espacio interno */
  white-space: pre-line; /* Respeta saltos de línea */
}
</style>
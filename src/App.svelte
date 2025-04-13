
<!-- Script JS -->
<script>
  /* Importamos d3 para tenerlo disponible */
  import * as d3 from 'd3'
  import IsotypeBars from "./lib/IsotypeBars.svelte"
  import Footer from './lib/Footer.svelte';
  let numbers = [24, 33, 42, 54, 63, 71, 77, 87, 92, 98]

</script>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet">
</head>
<!-- Estructura contenido HTML -->
<main id="container">
  <div class="text-container">
    <h1 class="title">Comparaciones en computación</h1>
    <h3 >Visualizando las diferencias en las capacidades de computo de los dispositivos.</h3>
    <p>Las primeras computadoras se desarrollaron en los años 1940.  
      Durante 30 años fueron un objeto exclusivo de los científicos y las fuerzas militares, hasta 1975, con la comercialización del Altair 8800.  
      Ese dispositivo era enorme y pesaba 30 kilos (!!). En los siguientes 50 años se llevaron adelante grandes avances en computadoras personales.  
      Las PCs son las que más conservaron su forma original, con el gabinete por un lado y el monitor, teclado y mouse por otro.  
    </p>
    <p>  
      Pero en el siglo XXI tenemos muchos más dispositivos. Conectamos todos los componentes en una sola pieza para construir una laptop.  
      ¡El celular en tu bolsillo también es una computadora!  
      Es obvio que cada tipo de procesador tiene distinta potencia, y hay un tradeoff entre portabilidad y capacidad de cómputo.  
      Abajo se ilustran las diferencias entre las distintas PCs, laptops y celulares.  
    </p>
    
  </div>
<!--svelte prop, inserting the graph-->
  <IsotypeBars
    numbers={numbers}
    title=""
  />
  <Footer/>

</main>

<!-- Estilos CSS -->
<style>
  .title {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }
</style>

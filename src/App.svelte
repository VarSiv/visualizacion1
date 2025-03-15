<!-- Script JS -->
<script>
  /* Importamos d3 para tenerlo disponible */
  import * as d3 from 'd3'

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
  </div>
  
  <div class="vis-container">
    <div class="svg-container">
      <img src="./images/desktop.svg" alt="desktop computer" id="desktop">
      <img src="./images/phone.svg" alt="phone" id="phone">
    </div>

    <div class="progress-container">

      <div class="progress-bar">
        <div class="progress-text green" style="--progress-width: 87%;">87%</div>
      </div>
      <div class="progress-bar">
        <div class="progress-text red" style="--progress-width: 24%;">24%</div>
      </div>

    </div>
    
  </div>
</main>

<!-- Estilos CSS -->
<style>
  .title {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }
</style>

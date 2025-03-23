
<!-- Script JS -->
<script>
  /* Importamos d3 para tenerlo disponible */
  import * as d3 from 'd3'
  import IsotypeBars from "./lib/IsotypeBars.svelte"
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
  </div>

  <IsotypeBars
    numbers={numbers}
    title="Magnitudes. Canal: longitud. Tipo: gráfico Isotype"
  />
<hr />

</main>

<!-- Estilos CSS -->
<style>
  .title {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }
</style>

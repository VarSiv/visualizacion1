<script>
  import * as d3 from 'd3';
  import IsotypeBars from "./lib/IsotypeBars.svelte";
  import Footer from './lib/Footer.svelte';

  let numbers = [24, 33, 42, 54, 63, 71, 77, 87, 92, 98];
  let numbers2 = [23, 35, 45, 56, 50, 43, 38, 32, 28, 25];
</script>

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet">
</head>

<main id="container">
  <div class="text-container">
    <h1 class="title">La revolución de los celulares</h1>
    <h3>¿Cómo cambia nuestro consumo a través del tiempo?</h3>
    <p class="intro">
      Las primeras computadoras se desarrollaron en los años 1940.  
      Durante 30 años fueron un objeto exclusivo de los científicos y las fuerzas militares, hasta 1975, con la comercialización del Altair 8800. Desde ahí, empezó una guerra entre las empresas tecnológicas para captar la mayor parte del mercado posible.
    </p>
    <p class="intro">  
      Hoy en día hay toda clase de cosas inteligentes: celus, laptops, relojes, ¡incluso los lavarropas tienen una conexión a internet! Por mucho tiempo las PC desktop eran el dispositivo dominante en cuanto a computadoras domesticas, pero en este dashboard vamos a analizar la revolución del celular como objeto predominante.
    </p>
  </div>

  <!-- Grid Section -->
  <div class="grid-2x2">
    <div class="grid-item span-2">
      <IsotypeBars numbers={numbers} numbers2={numbers2} title="" />
    </div>
    <div class="grid-item">
      <div class="flourish-embed flourish-chart" data-src="visualisation/22644519">
        <script src="https://public.flourish.studio/resources/embed.js"></script>
        <noscript><img src="https://public.flourish.studio/visualisation/22644519/thumbnail" width="100%" alt="chart visualization" />
        </noscript>
      </div>
      <p class="caption">
        Acá graficamos el porcentaje vendido de celulares vs PCs. Podemos ver que hasta 2012 venían muy parejo, pero después
        hay un crecimiento notable en el consumo de celulares relativo a las computadoras. 
      </p>
    </div>
    <div class="grid-item">
      <div class="flourish-embed flourish-chart" data-src="visualisation/22870420"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22870420/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
      <p class="caption">
        En este gráfico podemos ver la diferencia entre las ventas absolutas de celulares y desktops. Al principio viene 
        emparejado, pero recientemente explotó esta disparidad. Esto se debe tanto al aumento de los celulares como al 
        decaimiento de las PCs, haciendo este efecto tanto más notable.
      </p>
    </div>
  </div>

  <Footer />
</main>

<style>
  #container {
    width: 100%;
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .title {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .grid-2x2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 2rem;
  }

  .grid-item {
    background-color: #1e1d25;
    padding: 1rem;
    border: 1px solid #484848;
    border-radius: 8px;
  }
  .span-2 {
    grid-column: span 2;
  }
</style>

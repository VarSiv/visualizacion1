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
    <h1 class="title">La revolucion de los celulares</h1>
    <h3>Como cambia nuestro consumo a traves del tiempo?</h3>
    <p class="intro">
      Las primeras computadoras se desarrollaron en los años 1940.  
      Durante 30 años fueron un objeto exclusivo de los científicos y las fuerzas militares, hasta 1975, con la comercialización del Altair 8800.  
      Ese dispositivo era enorme y pesaba 30 kilos (!!). En los siguientes 50 años se llevaron adelante grandes avances en computadoras personales.  
      Las PCs son las que más conservaron su forma original, con el gabinete por un lado y el monitor, teclado y mouse por otro.  
    </p>
    <p class="intro">  
      Pero en el siglo XXI tenemos muchos más dispositivos. Conectamos todos los componentes en una sola pieza para construir una laptop.  
      ¡El celular en tu bolsillo también es una computadora!  
      Es obvio que cada tipo de procesador tiene distinta potencia, y hay un tradeoff entre portabilidad y capacidad de cómputo.  
      Abajo se ilustran las diferencias entre las distintas PCs, laptops y celulares.  
    </p>
    <p class="intro">  
      Ademas, vamos a analizar como se compara el crecimiento de celulares y PCs en las ultimas decadas, graficando ventas
      y potencial de computo.
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
        Aca graficamos el porcentaje vendido de celulares vs PCs. 
      </p>
    </div>
    <div class="grid-item">
      <div class="flourish-embed flourish-chart" data-src="visualisation/22870420"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/22870420/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
      <p class="caption">
        En cuanto a mejoras en la capacidad de computo, vemos que los celulares, igual que en el grafico anterior, tuvieron un
        crecimiento mas o menos constante a lo largo de los años. Las PCs tuvieron inovaciones explosivas del 2000 al 2010, 
        pero en la ultima decada hubo poco progreso.
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

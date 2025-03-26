<script>
    import * as d3 from "d3";
    export let title = "";
    export let numbers = [];
  
    // Order numbers from highest to lowest
    numbers.sort((a, b) => b - a);
  
    function getImageSrc(n) {
        if (n > 85) {
            return "./images/desktop.svg";
        } else if (n >= 50) {
            return "./images/laptop.svg";
        } else {
            return "./images/phone.svg";
        }
    }
  </script>
  
  <h3 class="headline">{title}</h3>
  <div class="iso__container-iso">
    {#each numbers as n, index}
        <div class="row">
            <p class="number-label">{n}</p>
            <div class="background-bar" style="width: {n}%; background-image: url({getImageSrc(n)});"></div>
        </div>
    {/each}
  </div>
  
  <style>
    .iso__container-iso {
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        align-items: start;
        justify-content: space-around;
    }
  
    .row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 45px; /* Increased space between rows */
        position: relative;
        width: 100%;
    }
  
    .number-label {
        font-weight: bold;
        font-size: 18px;
        text-align: left;
        margin: 0;
        padding: 0;
    }
  
    .background-bar {
        height: 70px;
        opacity: 1; /* Full opacity */
        background-repeat: repeat-x;
        background-size: auto 90%; /* Reduced size slightly for spacing */
        background-position: left center;
    }
  </style>
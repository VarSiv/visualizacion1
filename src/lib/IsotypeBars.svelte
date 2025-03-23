<script>
  import * as d3 from "d3"
  export let title = ""
  export let numbers = []
  
  // Sort numbers from big to small
  numbers.sort((a, b) => b - a)

  let numbersDivided10 = numbers.map(n => Math.floor(n / 10))
</script>

<h3 class="headline">{title}</h3>
<div class="iso__container-iso">
  {#each numbersDivided10 as n, index}
      <div class="row">
          <p class="number-label">{numbers[index]}</p>
          <div class="images-container">
              {#each Array(n) as m}
                  <img
                      style="height: 70px; padding: 10px"
                      src="./images/desktop.svg"
                      alt="desktop computer"
                  />
              {/each}
          </div>
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
      margin-bottom: 15px;
  }

  .number-label {
      font-weight: bold;
      font-size: 18px;
      text-align: left;
      margin: 0;
      padding: 0;
  }

  .images-container {
      display: flex;
  }
</style>

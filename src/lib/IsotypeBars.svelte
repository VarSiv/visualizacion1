<script>
    import * as d3 from "d3";
    export let title = "";
    export let numbers = [];
    export let numbers2 = [];

    let reversedNumbers = [...numbers].reverse();
    let reversedNumbers2 = [...numbers2].reverse();

    let combined = [];
    const maxLength = Math.max(reversedNumbers2.length, reversedNumbers.length);

    // Generate years: 2024, 2022, ..., 2006
    let years = [];
    for (let year = 2024; year >= 2006; year -= 2) {
        years.push(year);
    }

    for (let i = 0; i < maxLength; i++) {
        let pair = {};
        pair.desktop = i < reversedNumbers2.length ? reversedNumbers2[i] : null;
        pair.phone = i < reversedNumbers.length ? reversedNumbers[i] : null;
        pair.year = years[i] || null;
        combined.push(pair);
    }

    function getImageSrc(type) {
        return type === 'desktop' ? "./images/desktop2.svg" : "./images/phone2.svg";
    }
</script>

<h3 class="headline">{title}</h3>

<div class="iso__container">
    {#each combined as pair}
        <div class="pair-row">
            <div class="year-cell">
                {#if pair.year !== null}
                    <p class="year-label">{pair.year}</p>
                {/if}
            </div>
            <div class="bars-cell">
                {#if pair.desktop !== null}
                    <div class="row">
                        <p class="number-label">{pair.desktop}</p>
                        <div class="bar-track">
                            <div class="background-bar" 
                                 style="width: {pair.desktop}%; background-image: url({getImageSrc('desktop')});">
                            </div>
                        </div>
                    </div>
                {/if}
                {#if pair.phone !== null}
                    <div class="row">
                        <p class="number-label">{pair.phone}</p>
                        <div class="bar-track">
                            <div class="background-bar" 
                                 style="width: {pair.phone}%; background-image: url({getImageSrc('phone')});">
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
  .iso__container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
  }

  .pair-row {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      width: 100%;
  }

  .year-cell {
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .year-label {
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      margin: 0;
  }

  .bars-cell {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex-grow: 1;
  }

  .row {
      display: flex;
      align-items: center;
      gap: 5px;
      width: 100%;
  }

  .number-label {
      font-weight: bold;
      font-size: 18px;
      margin: 0;
      padding: 0;
      width: 50px;
      text-align: right;
  }

  .bar-track {
      flex-grow: 1;
      height: 50px;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
  }

  .background-bar {
      height: 100%;
      background-repeat: repeat-x;
      background-size: auto 90%;
      background-position: left center;
  }
</style>

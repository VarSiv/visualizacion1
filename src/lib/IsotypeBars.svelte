<script>
    import * as d3 from "d3";
    export let title = "";
    export let numbers = [];
    export let numbers2 = [];

    let reversedNumbers = [...numbers].reverse();
    let reversedNumbers2 = [...numbers2].reverse();

    let combined = [];
    const maxLength = Math.max(reversedNumbers2.length, reversedNumbers.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < reversedNumbers2.length) {
            combined.push({ value: reversedNumbers2[i], type: 'desktop' });
        }
        if (i < reversedNumbers.length) {
            combined.push({ value: reversedNumbers[i], type: 'phone' });
        }
    }

    function getImageSrc(type) {
        return type === 'desktop' ? "./images/desktop2.svg" : "./images/phone2.svg";
    }
</script>

<h3 class="headline">{title}</h3>

<div class="iso__container">
    {#each combined as item, index}
        <div class="row {index % 2 === 1 ? 'row-group-end' : ''}">
            <p class="number-label">{item.value}</p>
            <div class="background-bar" style="width: {item.value}%; background-image: url({getImageSrc(item.type)});"></div>
        </div>
    {/each}
</div>

<style>
  .iso__container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }

  .row {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 8px; /* normal space between rows */
      width: 100%;
  }

  /* Extra space after every second item */
  .row-group-end {
      margin-bottom: 30px; /* bigger gap after 2nd item, 4th item, etc */
  }

  .number-label {
      font-weight: bold;
      font-size: 18px;
      margin: 0;
      padding: 0;
  }

  .background-bar {
      height: 50px;
      background-repeat: repeat-x;
      background-size: auto 90%;
      background-position: left center;
  }
</style>

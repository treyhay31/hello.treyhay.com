<script>
  export let displayThings;
  export let svg;
</script>

<div class="display">
  <ul class="display__items">
  {#each displayThings as displayThing, i}
    <li class="display__item--item display__item--item-{i}">
      <a href={displayThing.url}>{displayThing.name}</a>
    </li>
  {/each}
  </ul>
</div>

<style>
  .display {
    height: 100vh;
    width: 100vw;
    background: radial-gradient(blue, cyan);
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
  }
  .display__items {
    display: grid;
    grid-template-columns: 1fr;
  }
  .display__items--item {
    text-transform: uppercase;
    font-weight: 100;
    font-size: 6rem;
  }

</style>
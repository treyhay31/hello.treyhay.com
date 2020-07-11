<script>
  import { draw, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  // import Display from '../Display/Display.svelte';
  export let things;
  
  let onDisplay = -1;
  const putItOnDisplay = (itemIndex) => {
    if (onDisplay > -1) {
      onDisplay = -1 
    } else {
      onDisplay = itemIndex
    }
  }

  let animateIn = false;
  onMount(() => {
		animateIn = true
	});
</script>

{#if animateIn}
  <div class="things">
    {#each things as thing, i}
      <div in:fade="{{duration: 750, delay: i * 250}}" class="thing thing-{thing.id}">
        <a href={thing.url} on:click={() => putItOnDisplay(i)}>
          <h3>
            {thing.name}
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path in:fade="{{duration: 750, delay: i * 250 + 1250}}" d={thing.svg}/>
          </svg>
        </a>
      </div>
    {/each}
    {#if onDisplay > -1}
      <div class="the-display" on:click={() => putItOnDisplay(-1)}>
        <h4>
          We On Display
        </h4>
        <ul>
          <li>a</li>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    {/if}
  </div>
{/if}


<style>
  .the-display {
    overflow: hidden;
    position: absolute;
    top: -70vh;
    left: -31vw;
    height: 100vh;
    width: 100vw;
    background-color: blueviolet;
    display: grid;
    grid-template-columns: 1fr;
    
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;

    z-index: 1000;
  }
	.things {
    position: relative;
    margin-top: 10rem;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(5, 1fr)
  }
  svg {
    width: 10rem;
    height: 10rem;
    fill: var(--color-font-primary);
    /* fill: transparent; */
    transform: translateY(-2rem);
    transition: all .4s;
  }
  .thing {
    border: 1px solid rgba(220, 220, 220, 0.420);
    border-radius: 3px;
    height: 20rem;
    width: 20rem;
    -webkit-box-shadow: var(--basic-shadow);
    -moz-box-shadow: var(--basic-shadow);
    box-shadow: var(--basic-shadow);
    display:inline-block;
    margin-left: -5rem;
    transition: all .4s;
  }

  a {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    transition: all .4s;
  }
  a:active > svg {
    transform: translateY(-2rem) translateY(0.4rem) translateX(-0.2rem);
  }
  h3 {
    transition: all .4s;
    color: transparent;
    font-weight: 200;
  }
  
  .thing:hover > a > h3 {
    color: var(--color-font-primary);
    transform: scale(3) translateY(-2.5rem);
  }
  .thing:hover {
    cursor: pointer;
    transform: scale(1.2) translateY(-3rem);
    z-index: 10;
  }
  .things:hover .thing:not(:hover){
    transform: scale(0.8) translateY(1rem);
  }
  .thing-1 {
    z-index: 1; 
    transform: translateY(4rem);
    background-color: var(--color-1);
  }
  .thing-2 {
    z-index: 2; 
    transform: translateY(2rem);
    background-color: var(--color-2);
  }
  .thing-3 {
    z-index: 3; 
    background-color: var(--color-3);
  }
  .thing-4 {
    z-index: 2; 
    transform: translateY(2rem);
    background-color: var(--color-2);
  }
  .thing-5 {
    z-index: 1; 
    transform: translateY(4rem);
    background-color: var(--color-1);
  }
</style>
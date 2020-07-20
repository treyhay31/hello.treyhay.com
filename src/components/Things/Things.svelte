<script>
  import { draw, fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Display from '../Display/Display.svelte';
  
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
          <svg class="thing-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path in:fade="{{duration: 750, delay: i * 250 + 1250}}" d={thing.svg} />
          </svg>
        </a>
      </div>
    {/each}
    {#if onDisplay > -1}
      <!-- <Display {...things[onDisplay].displayThings} svg={things[onDisplay].svg} /> -->
      <div transition:fade class="the-display" on:click={() => putItOnDisplay(-1)}>
        <h4>
          {things[onDisplay].name}
        </h4>
        <ul>
          {#each things[onDisplay].displayThings as displayThing, i}
            <li class="display__item--item display__item--item-{i}">
              <a class="display__item--link" href={displayThing.url}>{displayThing.name}</a>
            </li>
          {/each}
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path style="stroke:var(--color-0); stroke-width:0.1;" in:draw="{{duration: 7500}}" d={things[onDisplay].svg} />
        </svg>
      </div>
    {/if}
  </div>
{/if}


<style>

  .the-display {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
			to right bottom, 
			var(--color-font-primary),
			var(--color-4)
    );
    color: var(--color-2);
    
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;

    z-index: 1000;
  }
  .the-display h4 {
    color: var(--color-0);
    font-size: 10rem;
    transform: translateY(-10rem) translateX(1rem) skewY(-14deg) skewX(-11deg);
    letter-spacing: 2rem;
    z-index: 1002;
  }
  .the-display ul {
    list-style: none;
    z-index: 1002;
  }
  .the-display svg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    fill: var(--color-5);
    z-index: 1001;
    opacity: 0.1;
  }
  .display__item--link {
    font-size: 6rem;
    font-weight: 300;
    text-decoration: none;
    color: inherit;
    z-index: 1002;
  }

  .display__item--link:link, .display__item--link:visited {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(145deg, transparent 0%, transparent 50%, var(--color-1) 50%);
    background-size: 250%;
    transition: all .7s; 
  }

  .display__item--link:hover, .display__item--link:active {
    background-position: 100%;
    color: var(--color-4);
    transform: translateX(1rem); 
  }
  
	.things {
    position: relative;
    margin-top: 4rem;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(5, 1fr)
  }
  .thing-svg {
    width: 10rem;
    height: 10rem;
    fill: var(--color-font-primary);
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
  h3,
  h3:link, 
  h3:visited {
    transition: all .4s;
    color: transparent;
    font-weight: 200;
    text-decoration: none;
  }
  .thing:hover > a > h3 {
    padding: 1rem 2rem;
    color: var(--color-0);
    background: radial-gradient(
      ellipse at center, 
      var(--color-4) 40%, 
      transparent 70%);
    transform: scale(3) translateY(-2.5rem);
    text-decoration: none;
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

  @media (max-width: 950px) {
    .things {
      margin-top: 7rem;
      position: relative;
      grid-template-columns: 1fr;
    }
    .thing-1,
    .thing-2,
    .thing-3,
    .thing-4,
    .thing-5 {
      transform: translateY(0);
    }
    .thing-1,.thing-5 {
      position: absolute;
      display: hidden;
      height:0;
      width: 0;
    }
    .thing {
      height: 50rem;
      width: 50rem;
      display:inline-block;
      transition: all .4s;
      margin: 4rem;
    }
  }
</style>
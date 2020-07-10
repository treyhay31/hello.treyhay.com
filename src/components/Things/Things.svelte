<script>
	export let things;
</script>

<div class="things">
  {#each things as thing}
    <div class="thing thing-{thing.id}">
      <a href={thing.url}>
        <h3>
          {thing.name}
        </h3>
      </a>
    </div>
  {/each}
</div>

<style>
	.things {
    position: relative;
    margin-top: 5rem;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(5, 1fr)
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
  }
  h3 {
    transition: all .4s;
    color: transparent;
    font-weight: 200;
  }
  .thing:hover > a > h3 {
    color: pink;
    background-color: radial-gradient(green, rgba(blue, 0.3));
    transform: scale(3) translateY(-5rem);
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
    margin-bottom: 5rem;
  }
  .thing-3 {
    z-index: 5; 
    background-color: var(--color-3);
  }
  .thing-4 {
    z-index: 3; 
    transform: translateY(2rem);
    background-color: var(--color-2);
  }
  .thing-5 {
    z-index: 1; 
    transform: translateY(4rem);
    background-color: var(--color-1);
  }
</style>
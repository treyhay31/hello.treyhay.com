<script>
  export let name;
  export let url;
  export let id;
</script>

<a href={url}>
  <div class="thing thing-{id}">
    <h3>
      {name}
    </h3>
  </div>
</a>

<style>
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
  
  .thing:hover {
    transform: scale(1.2) translateY(-3rem);
  }
  
  .thing-1 {
    z-index: 1; 
    background-color: var(--color-1);
  }
  .thing-2 {
    z-index: 2; 
    background-color: var(--color-2);
    margin-bottom: 5rem;
  }
  .thing-3 {
    z-index: 3; 
    background-color: var(--color-3);
  }
  .thing-4 {
    z-index: 4; 
    background-color: var(--color-2);
    top: 0;
  }
  .thing-5 {
    z-index: 5; 
    background-color: var(--color-1);
  }
</style>
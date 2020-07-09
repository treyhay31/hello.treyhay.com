<script>
  export let name;
  export let url;
</script>

<a href={url}>
  <div class="thing">
    <h3>
      {name}
    </h3>
  </div>
</a>

<style>
  .thing {
    margin-top: 5rem;
    border: 1px solid rgba(220, 220, 220, 0.420);
    border-radius: 3px;
    height: 20rem;
    width: 20rem;
    -webkit-box-shadow: var(--basic-shadow);
    -moz-box-shadow: var(--basic-shadow);
    box-shadow: var(--basic-shadow);
  }

  .thing:hover {
    transform: scale(1.3);
  }
</style>
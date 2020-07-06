<script>
	import Thing from "./components/Thing/Thing.svelte";
	export let name;
	export let things;
</script>

<header>
	<h1>Hello {name}!</h1>
</header>
<main>
	<content>
		<h2>
			It is nice to see you!
		</h2>
		<p>Here are a few things you might find interesting... I hope.</p>
		<section>
			{#each things as thing}
				<Thing name={thing} />
			{/each}
		</section>
	</content>	
</main>

<style>

	header {
		text-align: center;
		padding: 1rem;
		max-width: 24rem;
		margin: 0 auto;
	}
	main {
		text-align: center;
		padding: 1rem;
		max-width: 24rem;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
	}
	h2 {
		color: #ff3e00;
		font-size: 2rem;
		font-weight: 100;
	}
	h3 {
		color: #ff3e00;
		font-size: 1.5rem;
		font-weight: 200;
	}
	content {
		color: #ffaf94;
		font-size: 1rem;
		font-weight: 100;
	}
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr)
	}
	.thing {
		margin: 5rem;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
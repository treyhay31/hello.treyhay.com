<script>
	import Thing from "./components/Thing/Thing.svelte";
	export let name;
	export let things;
</script>

<header>
	<h1>Hello {name}!</h1>
	<h2>It is nice to see you!</h2>
</header>
<main>
	<content>
		<h3>These are the things you should know...</h3>
		<section>
			{#each things as thing}
				<Thing {...thing} />
			{/each}
		</section>
	</content>	
</main>

<style>

	header {
		text-align: center;
		padding: 1rem;
		margin: 5vh 5vw;
		padding-top: 20vh;
		height: 50vh;
		clip-path: ellipse(40% 35% at 50% 55%);
		background-color: var(--color-background-alt-primary);
	}

	main {
		text-align: center;
		padding: 1rem 10rem;
		max-width: 24rem;
		margin: 0 auto;
	}

	h1 {
		color: var(--color-font-primary);
		text-transform: uppercase;
		font-size: var(--size-font-huge);
		font-weight: 500;
		letter-spacing: 1.3rem;
	}
	h2 {
		color: var(--color-font-primary);
		text-transform: uppercase;
		font-size: var(--size-font-big);
		font-weight: 300;
		letter-spacing: 1rem;
	}
	h3 {
		font-size: var(--size-font-big);
		font-weight: 900;
		display: inline-block;
		color: transparent;
		background-image: linear-gradient(
			to left, 
			var(--color-grey),
			var(--color-grey-dark)
		);
		-webkit-background-clip: text;
		background-clip: text;
	}
	section {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: -10rem;
		transition: all .2s;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
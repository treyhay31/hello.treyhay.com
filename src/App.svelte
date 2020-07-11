<script>
	import Things from "./components/Things/Things.svelte";
	export let name;
	export let things;
</script>

<header>
	<div class="header">
		<h1>Hello {name}!</h1>
		<h2>It's nice to see you!</h2>
	</div>
</header>
<main>
	<content>
		<h3>These are the things you should know...</h3>
		<section>
			<Things things={things}/>
		</section>
	</content>	
</main>

<style>

	header {
		text-align: center;
		padding: 1rem;
		height: 50vh;
		/* background-color: pink; */
	}

	.header {
		padding-top: 16vh;
		height: 100%;
		width: 100%;
		clip-path: ellipse(40% 35% at 50% 55%);
		background: radial-gradient(
			ellipse at center, 
			var(--color-5) 40%, 
			transparent 43%)
	}

	main {
		text-align: center;
		width: 100%;
		/* background-color: var(--color-background-primary); */
	}

	h1 {
		color: var(--color-background-primary);
		text-transform: uppercase;
		font-size: var(--size-font-huge);
		font-weight: 500;
		letter-spacing: 1.3rem;
	}
	h2 {
		color: var(--color-background-primary);
		text-transform: uppercase;
		font-size: var(--size-font-big);
		font-weight: 300;
		letter-spacing: 1rem;
	}

	h3 {
		transition: all .8s;
		font-size: var(--size-font-big);
		font-weight: 900;
		display: inline-block;
		color: transparent;
		background-image: linear-gradient(
			to right, 
			var(--color-font-primary),
			var(--color-4)
		);
		-webkit-background-clip: text;
		background-clip: text;
	}
	
	h3:hover {
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.45);
		transform: skewY(-7deg) scale(1.4) skewX(1deg);
	}

	section {
		padding: 5rem;
		display: grid;
		grid-template-columns: 1fr;
		align-content: center;
		align-items: center;
		justify-content: center;
		justify-items: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
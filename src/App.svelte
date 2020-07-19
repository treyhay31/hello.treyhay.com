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
	}

	.header {
		padding-top: 16vh;
		height: 100%;
		width: 100%;
		clip-path: ellipse(40% 35% at 50% 55%);
		background: radial-gradient(
			ellipse at center, 
			var(--color-4) 40%, 
			transparent 43%)
	}

	main {
		text-align: center;
		width: 100%;
		/* background-color: var(--color-background-primary); */
	}

	h1 {
		color: var(--color-2);
		text-transform: uppercase;
		font-size: var(--size-font-huge);
		font-weight: 500;
		letter-spacing: 1.3rem;
	}
	
	h2 {
		color: var(--color-1);
		text-transform: uppercase;
		font-size: var(--size-font-big);
		font-weight: 400;
		letter-spacing: 1rem;
	}
	
	h3 {
		transition: all .8s;
		font-size: var(--size-font-huge);
		font-weight: 900;
		display: inline-block;
		color: transparent;
		background-image: linear-gradient(
			to left, 
			var(--color-3),
			var(--color-5)
		);
		-webkit-background-clip: text;
		background-clip: text;
		max-width: 70vw;
	}
	
	h3:hover {
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.45);
		transform: skewY(-7deg) scale(1.4) skewX(1deg);
	}

	section {
		padding: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		align-content: center;
		align-items: center;
		justify-content: center;
		justify-items: center;
	}
	
	@media (max-width: 950px) {
		header {
			text-align: center;
			padding: 1rem;
			height: 50vw;
		}

		.header {
			padding-top: 17vw;
			height: 50vw;
			width: 100%;
			clip-path: ellipse(40% 35% at 50% 55%);
			background: radial-gradient(
				ellipse at center, 
				var(--color-4) 40%, 
				transparent 43%)
		}

		h1,h2 {
			letter-spacing: 0.75rem;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
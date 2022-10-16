<script lang="ts">
	import '../app.css';
	import Nav from '@comp/Nav.svelte';
	import PageTransition from '@comp/PageTransition.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import GridLines from '@comp/GridLines.svelte';
	import Grain from '@comp/svg/Grain.svelte';
	import { appRoutes } from '$lib/store';
	import C from '@comp/canvas/C.svelte';
</script>

<GridLines class="opacity-60" />

<Nav routes={$appRoutes} />

<main
	class="col-start-1 col-end-3 row-start-1 row-end-3 h-full overflow-hidden  text-justify  sm:text-left"
>
	<PageTransition key={data.url.pathname} duration={250}>
		<slot />
	</PageTransition>
</main>

<Grain
	class="pointer-events-none z-50 col-start-1 col-end-3 row-start-1 row-end-3 h-full w-full contain-paint"
/>

<C class="mix-blend-difference" />

<style>
	main {
		display: grid;
	}
	main > :global(div) {
		grid-row: 1/-1;
		grid-column-start: 1;
		@apply px-xs;
	}
</style>

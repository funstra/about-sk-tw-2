<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { destIndex } from '$lib/store';
	import Icons from './Icons.svelte';
	export let routes: App.route[] = [];

	let routing = false;
	let done = false;
	beforeNavigate(() => {
		routing = true;
		done = false;
	});
	afterNavigate(() => {
		routing = false;
		done = true;
		$destIndex = -1;
	});
</script>

<nav
	class="z-10 col-start-2 row-start-2 m-sm w-max self-end justify-self-end overflow-clip rounded-sm opacity-80 shadow-md shadow-ternary/20 transition-opacity delay-1000 duration-1000 hover:opacity-100 hover:delay-[0ms] hover:duration-150 sm:col-start-1 sm:row-start-1 sm:m-2xs  sm:self-start  sm:justify-self-start "
>
	<ul
		class:routing
		class:done
		class="flex flex-col gap-2xs bg-wht/95 stroke-[2] p-2xs  transition-colors sm:flex-row "
	>
		{#each routes as route, i}
			<a
				on:click={() => ($destIndex = i)}
				class:dest={$destIndex === i}
				class:current={route.current}
				class="relative text-[40px]  transition-colors duration-500 contain-paint sm:text-[28px]"
				href={route.path}
			>
				<Icons type={route.name.toLocaleLowerCase()} />
				<div
					class="pointer-events-none absolute top-[0] left-[0] -z-10 h-full w-full origin-bottom 
					rounded-sm bg-ternary transition-transform  "
				/>
			</a>
		{/each}
	</ul>
</nav>

<style>
	a.current {
		@apply text-wht;
	}

	ul a > div {
		@apply scale-y-0;
		transition-duration: 500ms;
	}

	a.current > div {
		@apply text-primary;
		@apply scale-y-100;
	}

	.routing a > div {
		transition-duration: 1000ms;
	}

	.routing .dest > div {
		@apply scale-y-[0.25];
	}
	.routing .current > div {
		@apply scale-y-75;
	}
</style>

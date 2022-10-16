<script lang="ts">
	import { destIndex } from '$lib/store';
	import Icons from './Icons.svelte';
	export let routes: App.route[] = [];
</script>

<nav
	class="z-10 col-start-2 row-start-2 m-sm w-max self-end justify-self-end overflow-clip rounded-sm opacity-80 shadow-md shadow-ternary/20 transition-opacity delay-1000 duration-1000 hover:opacity-100 hover:delay-[0ms] hover:duration-150 sm:col-start-1 sm:row-start-1 sm:m-2xs  sm:self-start  sm:justify-self-start "
>
	<ul class="flex flex-col gap-2xs bg-wht/95 stroke-[2] p-2xs  transition-colors sm:flex-row ">
		{#each routes as route, i}
			<a
				on:click={() => ($destIndex = i)}
				class:current={route.current}
				class="relative text-[40px]  contain-paint sm:text-[28px]"
				href={route.path}
			>
				<Icons type={route.name.toLocaleLowerCase()} />
				<div
					class="pointer-events-none absolute top-[0] left-[0] -z-10 h-full w-full origin-bottom scale-y-0 rounded-sm bg-ternary transition-transform duration-200 "
				/>
			</a>
		{/each}
	</ul>
</nav>

<style>
	a.current {
		@apply text-wht;
	}
	a.current > div {
		@apply text-primary;
		@apply scale-100;
	}
</style>

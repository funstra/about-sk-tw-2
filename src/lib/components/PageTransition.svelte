<script lang="ts">
	import { destIndex, navIndex } from '$lib/store';
	import { backIn, quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let key: string;
	export let duration: number = 200;
	export let distance: number = 5;

	$: direction = $navIndex > $destIndex ? -1 : 1;
	// function fade(node: HTMLElement, { delay = 0, duration = 400, distance = 5 }) {
	// 	const o = +getComputedStyle(node).opacity;
	// 	const t = +getComputedStyle(node).transform;

	// 	return {
	// 		delay,
	// 		duration,
	// 		// css: (t:number) => `opacity: ${t * o}`
	// 		css: (t: number) => `
	// 		opacity: ${t * o};
	// 		transform: translate(calc(var(--x,0px)*${t * distance}),calc(var(--y,0px)*${t * distance}));
	// 		`
	// 	};
	// }
	function _fly(
		node: HTMLElement,
		{ delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}
	) {
		const style = getComputedStyle(node);
		const target_opacity = +style.opacity;
		const transform = style.transform === 'none' ? '' : style.transform;
		const od = target_opacity * (1 - opacity);
		return {
			delay,
			duration,
			easing,
			css: (t: number, u: number) => `
			transform: ${transform} translate(calc(var(--x_,1)*${(1 - t) * x}px), calc(var(--y_,1)*${
				(1 - t) * x
			}px));
			opacity: ${target_opacity - od * u}`
		};
	}
</script>

<!-- in:fly|local={{
			duration,
			delay: duration,
			x: distance * 1.25 * direction,
			easing: quadInOut
		}}
		out:fly|local={{
			duration: duration * 1.25,
			x: -distance * direction,
			easing: backIn
		}} -->
{#key key}
	<div
		in:_fly|local={{
			duration,
			delay: duration,
			x: distance * 1.25 * direction,
			easing: quadInOut
		}}
		out:_fly|local={{
			duration: duration * 1.25,
			x: -distance * direction,
			easing: backIn
		}}
	>
		<slot />
	</div>
{/key}

<style>
	div {
		--x_: 0;
		--y_: 1;
		overflow-x: hidden;
		overflow-y: scroll;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(7, 1fr);
		transform: translate(0px, 0px);
	}
	@media (min-width: 640px) {
		div {
			--x_: 1;
			--y_: 0;
		}
	}
	div > :global(*) {
		contain: paint;
	}
</style>

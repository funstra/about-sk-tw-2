<script lang="ts">
	import { onMount } from 'svelte';

	let opacity = 0;
	let canvas: HTMLCanvasElement;
	onMount(() => {
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;

		const ctx = canvas.getContext('2d');
		if (ctx) {
			let dotArray: { x: number; y: number; s: number; col: string }[] = [];

			const n = 128;
			for (let i = 0; i < n; i++) {
				for (let j = 0; j < n; j++) {
					const ystep = i / n;
					const xstep = j / n;
					dotArray.push({
						x: xstep,
						y: ystep,
						col: ['#fff', '#aaa', '#555'][Math.floor(Math.random() * 3)],
						// col: ['#777b', '#f22f', '#fffb', '#eeeb', '#dddb'][Math.floor(Math.random() * 5)],
						// col: 'red',
						s: Math.random() * 1 + 0.25
					});
				}
			}

			const largestSide = Math.max(canvas.width, canvas.height);

			draw(dotArray)((obj, i) => {
				const x = obj.x * largestSide;
				const y = obj.y * largestSide;
				ctx.fillStyle = obj.col;
				ctx.fillRect(x, y, obj.s, obj.s);
			});
			opacity = 0.4;


			window.onresize = (e) => {
				const largestSide = Math.max(canvas.width, canvas.height);
				canvas.width = canvas.clientWidth;
				canvas.height = canvas.clientHeight;

				draw(dotArray)((obj, i) => {
					const x = obj.x * largestSide;
					const y = obj.y * largestSide;
					ctx.fillStyle = obj.col;
					ctx.fillRect(x, y, obj.s, obj.s);
				});
			};
		}
	});
	const draw =
		<A extends Array<any>>(arr: A) =>
		(fn: (obj: A[0], i?: number) => void) => {
			arr.forEach(fn);
		};

	let _class: string = '';
	export { _class as class };
</script>

<canvas
	style:opacity
	class={`pointer-events-none z-50 col-start-1 col-end-3 row-start-1 row-end-3 block h-full w-full ${_class}`}
	bind:this={canvas}
/>

<style>
	canvas {
		opacity: 0;
		transition-property: all;
		transition-duration: 1000ms;
	}
</style>

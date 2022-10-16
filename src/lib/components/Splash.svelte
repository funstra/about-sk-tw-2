<script lang="ts">
	let _class = '';
	export { _class as class };
	const content = [
		'hr',
		'br',
		'Designing Engineering',
		'br',
		'&&',
		'Information Designing',
		'br',
		'Algorithmic UI',
		'&&',
		'br',
		'Markup',
		'love'
	];
</script>

<h4 class={`${_class} text-center sm:text-left leading-[2ex] `}>
	{#each content as row, i}
		{#if row === 'br'}
			<br />
		{:else}
			<div class="overflow whitespace-nowrap" style:--i={i}>
				{#if row === '&&'}
					<strong>&&</strong>
				{:else if row === 'hr'}
					<hr />
				{:else if row === 'love'}
					<span>
						≕ l<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							class="inline w-[1em] stroke-ternary fill-ternary -translate-y-[2px]"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>ve
					</span>
				{:else}
					<span>{row}</span>
				{/if}
			</div>
		{/if}
	{/each}
</h4>

<style>
	@keyframes enter {
		from {
			transform: translate(var(--x, 0%), var(--y, 0%));
		}
		to {
			transform: translate(0, 0);
		}
	}
	h2 {
		line-height: 1.3;
		text-align: center;
		grid-row: -3;
		justify-self: center;
		grid-column-start: 1;
		grid-column-end: 13;
	}
	:global(html[data-new-visit='true']) :is(span, strong) {
	}
	span,
	strong,
	hr {
		/* margin-inline-end: 1ch; */
		animation-name: enter;
		display: inline-block;
		animation-duration: 400ms;
		animation-fill-mode: both;
		animation-delay: calc(200ms + 90ms * var(--i) + var(--offset, 0ms));
		animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1.5);
		/* animation-timing-function: cubic-bezier(1, 0.22, 0, 1.42); */
	}
	span,
	strong {
		--y: 100%;
	}
	hr {
		--x: -100%;
		/* --offset: 750ms; */
	}
	.overflow {
		margin-inline-end: 1ch;
		/* padding-top: 4px; */
		display: inline-block;
		/* white-space: pre-line; */
		line-height: 1;
		overflow: hidden;
		/* outline: 1px currentColor dashed; */
		border: 1px currentColor dashed;
		padding: 2px;
	}
	hr {
		display: block;
		width: var(--space-3xl);
		/* margin-inline: auto; */
		/* border-color: hsl(var(--col-prim)); */
		border-style: none;
		height: var(--space-s);
		background-color: hsl(var(--col-primary));
		/* border-width: var(--space-2xs); */
		/* margin-block: var(--space-3xs); */
	}

	svg {
		grid-row: 1 / 5;
		overflow: visible;
	}

	@media (min-width: 640px) {
		h2 {
			width: auto;
			justify-self: start;
			text-align: left;
			grid-row: 2;
			grid-column-start: 2;
		}
		:global(hr) {
			margin-inline: 0;
		}
		svg {
			grid-column: -7 / -1;
			grid-row: 3/-1;
		}
	}
</style>

<script lang="ts">
	export let type: 'home' | 'writing' | 'works';
	export let width: number = 16;
	export let height: number = 16;
</script>

<svg stroke="currentColor" {width} {height} viewBox="0 0 32 32" class="pointer-events-none">
	<g transform="translate(16 16)" fill="none">
		<g class="shape" fill="none" stroke-linejoin="round">
			{#if type === 'home'}
				<circle r="8" />
			{:else if type === 'writing'}
				<rect fill="none" x={-8} y={-8} width={16} height={16} />
			{:else if type === 'work'}
				<polygon points="-8,8 8,8 0,-8" />
			{/if}
		</g>
	</g>
	<g class="bg  translate-x-[-10%] translate-y-[10%] opacity-0  transition-all duration-200">
		<rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#cross)" />
	</g>
</svg>

<style>
	svg {
		width: 1em;
		height: 1em;
	}
</style>

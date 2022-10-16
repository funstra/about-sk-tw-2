<script lang="ts">
	export let patternSize = 16;
	export let sWidth = 0.1;
	let _class = '';
	export { _class as class };
</script>

<svg
	id="gridlines"
	class={` -z-10 transition-none row-start-1 col-start-1 row-end-3 col-end-3 pointer-events-none contain-paint  ${_class}`}
	width="100%"
	height="100%"
	viewBox="0 0 256 256"
	preserveAspectRatio="xMidYMid slice"
>
	<defs>
		<pattern
			id="pattern-grid"
			viewBox="0 0 {patternSize} {patternSize}"
			width={patternSize}
			height={patternSize}
			patternUnits="userSpaceOnUse"
		>
			<g stroke="currentColor" fill="none" stroke-width={sWidth}>
				<line x1={0} x2={patternSize} y1="0" y2={patternSize} />
				<line x1={patternSize} x2={0} y1="0" y2={patternSize} />
				<circle
					fill="currentColor"
					cx={patternSize / 2}
					cy={patternSize / 2}
					r={sWidth * 4}
					opacity="0.75"
				/>
			</g>
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill="url(#pattern-grid)" fill-opacity="0.2" />
</svg>

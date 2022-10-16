<script lang="ts">
	let _class = '';
	export { _class as class };
</script>

<svg class={`block ${_class}`} id="grain">
	<filter id="filter-grain" x="0" y="0" width="1" height="1">
		<feTurbulence baseFrequency="0.4" numOctaves="1" seed="1" type="fractalNoise" result="smal" />
		<feTurbulence baseFrequency="0.001" numOctaves="1" seed="1" type="fractalNoise" />
		<feComposite in="smal" operator="arithmetic" k1="0.3" k2="0.1" k3="-0.25" />
		<feColorMatrix type="saturate" values="0" />
	</filter>
	<rect x="0" y="0" width="100%" height="100%" filter="url(#filter-grain)" opacity="1" />
</svg>

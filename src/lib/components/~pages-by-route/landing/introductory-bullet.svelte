<script>
	import { Circle } from 'phosphor-svelte';
</script>

<p class="xs:pl-2 flex items-center gap-4">
	<span class="text-bc-black/20">
		<Circle />
	</span>
	<span class="decoration-bc-amber/30 leading-relaxed text-black/90 underline underline-offset-2">
		<slot />
	</span>
</p>

<script>
	import { Square } from 'phosphor-svelte';
</script>

<p class="flex items-center gap-4 pl-2">
	<span class="text-bc-black/20">
		<Square />
	</span>
	<span
		class="decoration-bc-amber/30 text-xl leading-[1.6em] text-black/90 underline underline-offset-2"
	>
		<slot />
	</span>
</p>

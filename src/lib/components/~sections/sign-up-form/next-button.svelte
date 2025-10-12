<script lang="ts" module>
	import { getEmblaContext } from '^components/ui/carousel/context';
</script>

<script lang="ts">
	let {
		handleGoNext
	}: {
		handleGoNext: (arg0: { scrollNext: () => void }) => void;
	} = $props();

	const emblaCtx = getEmblaContext('<Carousel.Next/>');
</script>

<button
	class="bg-bc-amber cursor-pointer rounded-xl px-4 py-2 text-lg font-medium text-white"
	onclick={() => {
		// handleGoNext({ scrollNext: emblaCtx.scrollNext });
		emblaCtx.scrollNext();
	}}
	type="button">Next</button
>

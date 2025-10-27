<script lang="ts">
	let {
		handleGoNext
	}: {
		handleGoNext: () => void;
	} = $props();
</script>

<button
	class="bg-bc-amber cursor-pointer rounded-xl px-4 py-2 text-lg font-medium text-white"
	onclick={handleGoNext}
	type="button">Next</button
>

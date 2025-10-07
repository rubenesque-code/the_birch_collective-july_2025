<script lang="ts" module>
	import type { Snippet } from 'svelte';
</script>

<script lang="ts">
	let { children, isRequired, question, subtext } = $props<{
		children: Snippet<[]>;
		question: string;
		subtext?: string;
		isRequired?: boolean;
	}>();
</script>

<div>
	<h3 class="text-[19px] font-medium text-black">
		{question}
	</h3>
	{#if subtext}
		<p class="mt-1 text-black/70">{subtext}</p>
	{/if}
	<span class="mt-1 text-sm text-black/50 italic">
		(
		{#if isRequired}
			required
		{:else}
			optional
		{/if}
		)
	</span>

	<div class="mt-6">
		{@render children?.()}
	</div>
</div>

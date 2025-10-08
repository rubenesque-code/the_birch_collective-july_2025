<script lang="ts" module>
	import type { Snippet } from 'svelte';
</script>

<script lang="ts">
	let {
		children,
		required = 'required',
		question,
		subtext
	} = $props<{
		children: Snippet<[]>;
		question: string;
		subtext?: string;
		required: string | false;
	}>();
</script>

<div class="flex h-full flex-col gap-1">
	<h3 class="text-[19px] leading-relaxed font-medium text-black">
		{question}
	</h3>

	{#if subtext}
		<p class="leading-relaxed text-black/70">{subtext}</p>
	{/if}

	<span class="text-[15px] leading-relaxed text-black/50 italic">
		{#if required}
			{required}
		{:else}
			optional
		{/if}
	</span>

	<div class="mt-6 h-full">
		{@render children?.()}
	</div>
</div>

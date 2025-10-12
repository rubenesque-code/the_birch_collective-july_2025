<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { elasticIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let {
		children,
		required = 'required',
		question,
		subtext,
		showError = $bindable()
	} = $props<{
		children: Snippet<[]>;
		question: string;
		subtext?: string;
		required: string | false;
		showError: boolean;
	}>();
</script>

<div class="flex h-full flex-col gap-1">
	<h3 class="text-bc-amber font-display text-[30px] leading-relaxed font-bold tracking-[0.02em]">
		{question}
	</h3>

	{#if subtext}
		<p class="text-bc-logo-black/70 mt-2 leading-relaxed">{subtext}</p>
	{/if}

	<span class="text-bc-logo-black/50 mt-2 text-[15px] leading-relaxed italic">
		{#if required}
			{required}
		{:else}
			optional
		{/if}
	</span>

	<div class="mt-6 h-full">
		{@render children?.()}
	</div>

	{#if showError}
		<p
			class="mt-6 text-base text-red-500"
			transition:fade={{ duration: 100, delay: 50, easing: elasticIn }}
		>
			Please select at least one response
		</p>
	{/if}
</div>

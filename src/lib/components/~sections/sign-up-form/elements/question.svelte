<script lang="ts" module>
	import { Circle } from 'phosphor-svelte';
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
	<div class="flex items-center gap-2">
		<span class={`text-xs ${!showError ? 'text-bc-amber/50' : 'text-red-500'}`}>
			<Circle weight="fill" />
		</span>
		<h3 class="text-bc-logo-black text-[20px] leading-relaxed font-medium">
			{question}
		</h3>
	</div>

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

<script lang="ts" module>
	import { Circle } from 'phosphor-svelte';
	import type { Snippet } from 'svelte';
	import { elasticIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let {
		children,
		required = 'Response optional',
		question,
		subtext,
		showError = $bindable(),
		errorText
	} = $props<{
		children: Snippet<[]>;
		question: string;
		subtext?: string;
		required?: string | false;
		showError?: boolean;
		errorText?: string;
	}>();
</script>

<div class="flex flex-col gap-1">
	<div class="flex items-center gap-3">
		<h3 class="text-bc-logo-black text-[20px] leading-relaxed font-medium">
			{question}
		</h3>
	</div>

	{#if subtext}
		<p class="text-bc-logo-black/70 mt-2 leading-relaxed">{subtext}</p>
	{/if}

	<div class="mt-2 flex items-center gap-3">
		<span class="text-bc-logo-black/50 text-[15px] leading-relaxed italic">
			{required}
		</span>
		{#if showError}
			<span class="text-xs text-red-600">
				<Circle weight="fill" />
			</span>
		{/if}
	</div>

	<div class="mt-6">
		{@render children?.()}
	</div>

	{#if showError}
		<p
			class="mt-6 text-sm text-red-500"
			transition:fade={{ duration: 100, delay: 50, easing: elasticIn }}
		>
			{errorText}
		</p>
	{/if}
</div>

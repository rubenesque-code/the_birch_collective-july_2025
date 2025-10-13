<script lang="ts" module>
	import { fade } from 'svelte/transition';
	import { elasticIn } from 'svelte/easing';

	import type { WithElementRef } from '^lib/utils';

	import { Input, Label } from '^components/ui';
</script>

<script lang="ts">
	let {
		value = $bindable(),
		onkeyup,
		placeholder = 'Enter response here',
		label,
		id,
		showError,
		errorText,
		type = 'text',
		inputmode,
		pattern,
		required
	}: {
		value: string;
		onkeyup?: WithElementRef<HTMLInputElement>['onkeyup'];
		placeholder?: string;
		label?: string;
		id?: string;
		showError?: boolean;
		errorText?: string;
		type?: 'tel' | 'text';
		inputmode?: 'tel';
		pattern?: string;
		required?: string;
	} = $props();
</script>

<div>
	<div class="flex items-center gap-6">
		{#if label}
			<Label class="text-black/50" for={id}>{label}</Label>
		{/if}

		{#if required}
			<p class="text-bc-logo-black/40 text-[13px] leading-relaxed italic">
				{required}
			</p>
		{/if}
	</div>

	<Input
		class="mt-2 w-full !text-base focus:outline-none focus-visible:border-black focus-visible:ring-1"
		{placeholder}
		{onkeyup}
		{id}
		{type}
		{inputmode}
		{pattern}
		bind:value
	/>

	{#if showError}
		<p
			class="mt-6 text-sm text-red-500"
			transition:fade={{ duration: 100, delay: 50, easing: elasticIn }}
		>
			{errorText}
		</p>
	{/if}
</div>

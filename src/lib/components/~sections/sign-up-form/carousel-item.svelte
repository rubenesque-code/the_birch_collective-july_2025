<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { linear } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import { Card, Carousel } from '^components/ui';
</script>

<script lang="ts">
	let {
		children,
		title,
		showError = $bindable()
	}: {
		title: string;
		children: Snippet<[]>;
		showError?: boolean;
	} = $props();
</script>

<Carousel.Item class="flex min-h-full basis-full flex-col pt-4 pb-6 pl-4 md:pl-10">
	<div class="shrink-0">
		<h2 class="font-display text-bc-logo-black mt-12 text-4xl font-bold">
			{title}
		</h2>
	</div>

	<div class="mt-12 grow overflow-x-hidden overflow-y-auto pr-4 pb-4 md:pr-10">
		{@render children?.()}
	</div>

	<div class="flex shrink-0 grow flex-col justify-end px-4 pt-2 md:px-10">
		{#if showError}
			<p class="text-[16px] text-black/60" transition:fade={{ duration: 50, easing: linear }}>
				Please complete all required fields before continuing.
			</p>
		{/if}
	</div>
</Carousel.Item>

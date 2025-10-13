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

	function preventTabNavigation(e: KeyboardEvent) {
		if (e.key === 'Tab') {
			e.stopPropagation();
		}
	}
</script>

<Carousel.Item class="flex h-full basis-full flex-col pl-0" onkeydown={preventTabNavigation}>
	<Card.Root class="ml-0 flex h-full grow flex-col border-none shadow-none">
		<Card.Header class="flex justify-between px-10">
			<Card.Title class="font-display text-bc-logo-black/80 mt-12 text-4xl font-bold">
				{title}
			</Card.Title>
		</Card.Header>

		<Card.Content class="mt-16 flex grow flex-col gap-10 overflow-y-auto px-10">
			{@render children?.()}
		</Card.Content>

		<div class="flex shrink-0 grow flex-col justify-end px-10 pt-4">
			{#if showError}
				<p class="text-[16px] text-black/60" transition:fade={{ duration: 50, easing: linear }}>
					One or more questions need a valid response
				</p>
			{/if}
		</div>
	</Card.Root>
</Carousel.Item>

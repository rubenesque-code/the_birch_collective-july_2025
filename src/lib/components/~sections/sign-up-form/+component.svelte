<script lang="ts" module>
	import { fade, scale } from 'svelte/transition';
	import type { EmblaCarouselType } from 'embla-carousel';

	import { browser } from '$app/environment';

	import { toggleBodyScroll } from '^helpers';

	import { Carousel } from '^components/ui';
	import Content from './content.svelte';
</script>

<script lang="ts">
	import type { EmblaCarouselSvelteType } from 'embla-carousel-svelte';

	let { isOpen = $bindable(), onClickClose } = $props<{
		isOpen: boolean;
		onClickClose: () => void;
	}>();

	$effect(() => {
		if (browser) toggleBodyScroll({ triggerDisableOn: isOpen });
	});

	let a: EmblaCarouselSvelteType;
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 grid place-items-center bg-white/90"
		transition:fade={{ duration: 200 }}
	></div>

	<div
		class="fixed inset-0 z-[60] grid place-items-center"
		transition:scale={{ start: 0.9, opacity: 0, duration: 300 }}
	>
		<div>
			<div class="relative mx-2 overflow-visible shadow-xl">
				<Carousel.Root
					class="relative flex h-[800px] max-h-[90vh] w-[95vw] max-w-[800px] flex-col rounded-lg bg-white px-4 py-3"
					opts={{ align: 'center' }}
				>
					<Content bind:isOpen {onClickClose} />
				</Carousel.Root>
			</div>
		</div>
	</div>
{/if}

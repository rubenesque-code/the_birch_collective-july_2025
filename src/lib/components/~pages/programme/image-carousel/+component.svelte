<script lang="ts" module>
	import { type EnhancedImg } from '^assets/image';

	import { Carousel } from '^components/ui';
</script>

<script lang="ts">
	let { images }: { images: Array<{ src: EnhancedImg; alt: string }> } = $props();

	/* 	const groupedImages = $derived.by(() => {
		const groupedImages = [];

		for (let i = 0; i < images.length; i += 2) {
			groupedImages.push(images.slice(i, i + 2));
		}

		return groupedImages;
	}); */
</script>

<Carousel.Root opts={{ loop: true, align: 'start' }} class="w-full ">
	<Carousel.Content>
		{#each images as item, i}
			<Carousel.Item class="h-[300px]">
				<enhanced:img
					class="bg-my-grey-3/20 h-full w-full object-contain"
					src={item.src}
					alt={item.alt}
				/>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<div class="mt-3 flex items-center justify-between">
		<Carousel.CarouselPrevious class="static translate-y-0 cursor-pointer" />

		<Carousel.CarouselNext class="static translate-y-0 cursor-pointer" />
	</div>
</Carousel.Root>

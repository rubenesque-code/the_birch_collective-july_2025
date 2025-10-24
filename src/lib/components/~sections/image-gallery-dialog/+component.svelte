<script lang="ts" module>
	import { type EnhancedImg } from '^assets/image';

	import { Carousel, Dialog } from '^components/ui';
</script>

<script lang="ts">
	let {
		isOpen = $bindable(),
		images
	}: { isOpen: boolean; images: Array<{ src: EnhancedImg; alt: string }> } = $props();
</script>

<Dialog.Root
	open={isOpen}
	onOpenChange={(value) => {
		if (value === false) isOpen = false;
	}}
>
	<Dialog.Content
		class="flex h-[1600px] max-h-[calc(100vh-24px)] !w-[1600px] !max-w-[calc(100vw-24px)] flex-col !p-4 sm:max-h-[calc(100vh-40px)] sm:!max-w-[calc(100vw-40px)] sm:!p-6 md:!p-12"
	>
		<Dialog.Header class="flex shrink-0 flex-col items-center pb-1 text-center">
			<Dialog.Title class="!text-base md:text-lg"
				>Images from <span class="text-bc-amber font-medium italic">Fresh</span></Dialog.Title
			>
		</Dialog.Header>

		<Carousel.Root opts={{ loop: true, align: 'center' }} class="flex h-full w-full grow flex-col">
			<Carousel.Content class="ml-0 !h-full w-full grow !pl-0" hiddenParentClass="h-full p-0 !pl-0">
				{#each images as item}
					<Carousel.Item class="grabbable h-full w-full cursor-grab  !pl-0 active:cursor-grabbing">
						<enhanced:img class="h-full w-full object-contain px-1" src={item.src} alt={item.alt} />
					</Carousel.Item>
				{/each}
			</Carousel.Content>

			<div class="mt-3 flex shrink-0 items-center justify-between sm:py-4 md:py-6">
				<Carousel.CarouselPrevious class="static translate-y-0 cursor-pointer" />

				<Carousel.CarouselNext class="static translate-y-0 cursor-pointer" />
			</div>
		</Carousel.Root>
	</Dialog.Content>
</Dialog.Root>

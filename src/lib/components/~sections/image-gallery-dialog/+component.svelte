<script lang="ts" module>
	import { type EnhancedImg } from '^assets/image';

	import { Carousel, Dialog } from '^components/ui';
</script>

<script lang="ts">
	let { isOpen, images }: { isOpen: boolean; images: Array<{ src: EnhancedImg; alt: string }> } =
		$props();
</script>

<Dialog.Root open={isOpen}>
	<Dialog.Content
		class="flex h-[1600px] max-h-[calc(100vh-40px)] !w-[1600px] !max-w-[calc(100vw-40px)] flex-col border-red-600 p-12"
	>
		<Dialog.Header class="flex shrink-0 flex-col items-center text-center">
			<Dialog.Title class="text-lg"
				>Images from <span class="text-bc-amber font-medium italic">Fresh</span></Dialog.Title
			>
		</Dialog.Header>

		<Carousel.Root opts={{ loop: true, align: 'center' }} class="flex h-full w-full grow flex-col ">
			<Carousel.Content class="ml-0 !h-full w-full grow !pl-0" hiddenParentClass="h-full p-0 !pl-0">
				{#each images as item}
					<Carousel.Item class="grabbable h-full w-full cursor-grab !pl-0 active:cursor-grabbing">
						<enhanced:img class="h-full w-full object-contain" src={item.src} alt={item.alt} />
					</Carousel.Item>
				{/each}
			</Carousel.Content>

			<div class="mt-3 flex shrink-0 items-center justify-between pb-8">
				<Carousel.CarouselPrevious class="static translate-y-0 cursor-pointer" />

				<Carousel.CarouselNext class="static translate-y-0 cursor-pointer" />
			</div>
		</Carousel.Root>
	</Dialog.Content>
</Dialog.Root>

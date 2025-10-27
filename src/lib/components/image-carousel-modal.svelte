<script lang="ts" module>
	import { type EnhancedImg } from '^assets/image';

	import { Carousel, Dialog } from '^components';
</script>

<script lang="ts">
	let {
		isOpen = $bindable(),
		images,
		title
	}: {
		isOpen: boolean;
		images: Array<{ src: EnhancedImg; alt: string }>;
		title?: string;
	} = $props();
</script>

<Dialog.Root
	open={isOpen}
	onOpenChange={(value) => {
		if (value === false) isOpen = false;
	}}
>
	<Dialog.Content
		class="flex h-[1600px] max-h-[calc(100vh-24px)] !w-[1600px] !max-w-[calc(100vw-24px)] flex-col !p-4  md:!pt-12 lg:max-h-[calc(100vh-40px)] lg:!max-w-[calc(100vw-40px)] lg:!p-12"
	>
		{#if title}
			<Dialog.Header
				class="absolute top-4 left-4 flex shrink-0 flex-col items-center pb-1 text-center"
			>
				<Dialog.Title class="!text-base md:text-lg">{@html title}</Dialog.Title>
			</Dialog.Header>
		{/if}

		<Carousel.Root
			opts={{ loop: true, align: 'center' }}
			class="flex h-full w-full grow flex-col pt-8"
		>
			<Carousel.Content class="ml-0 !h-full w-full grow !pl-0" hiddenParentClass="h-full p-0 !pl-0">
				{#each images as item}
					<Carousel.Item class="grabbable h-full w-full cursor-grab  !pl-0 active:cursor-grabbing">
						<enhanced:img class="h-full w-full object-contain px-1" src={item.src} alt={item.alt} />
					</Carousel.Item>
				{/each}
			</Carousel.Content>

			<div class="mt-3 flex shrink-0 items-center justify-between xl:py-6">
				<Carousel.CarouselPrevious class="static translate-y-0 cursor-pointer" />

				<Carousel.CarouselNext class="static translate-y-0 cursor-pointer" />
			</div>
		</Carousel.Root>
	</Dialog.Content>
</Dialog.Root>

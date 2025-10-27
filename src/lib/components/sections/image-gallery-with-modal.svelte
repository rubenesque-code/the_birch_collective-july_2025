<script lang="ts" module>
	import type { EnhancedImg } from '^assets/image';

	import { ImageCarouselModal } from '^components';
</script>

<script lang="ts">
	let { images, title }: { images: Array<{ src: EnhancedImg; alt: string }>[]; title: string } =
		$props();

	let modalIsOpen = $state(false);
</script>

<div class="flex justify-center">
	<div class="section-x-padding 4xl:max-w-[1600px] box-content w-full max-w-[1200px]">
		<div class="relative">
			<p class="4xl:text-lg text-right text-base text-black/70">
				Images from <span class="text-bc-amber font-medium italic">Fresh</span>
			</p>

			<div class="relative mt-1">
				<div
					class="xs:h-[calc(500px+12px)] 4xl:h-[calc(800px+12px)] relative h-[calc(440px+12px)] sm:h-[calc(600px+12px)]"
					onclick={() => (modalIsOpen = true)}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							modalIsOpen = true;
						}
					}}
					role="button"
					tabindex="0"
					aria-label="Open image gallery"
				>
					<div class="absolute top-0 left-0 flex h-full w-full flex-col gap-3 overflow-hidden">
						{#each images as row}
							<div class="image-gallery-row-container">
								{#each row as item}
									<div class="h-full" style:aspect-ratio={item.src.img.w / item.src.img.h}>
										<enhanced:img
											class="h-full w-full cursor-pointer"
											src={item.src}
											alt={item.alt}
										/>
									</div>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<ImageCarouselModal bind:isOpen={modalIsOpen} images={images.flat()} {title} />

<style>
	.image-gallery-row-container {
		@apply xs:h-[250px] 4xl:h-[400px] flex h-[220px] w-full gap-3 sm:h-[300px];
	}
</style>

<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';

	import {
		logo_1,
		logo_2,
		logo_3,
		logo_4,
		logo_5,
		logo_6,
		logo_7,
		logo_8,
		logo_9,
		logo_10,
		logo_11,
		logo_12
	} from '^assets/partners-and-supporters-logos';

	import { Card, Carousel } from '^components/ui';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

	const items = [
		logo_1,
		logo_2,
		logo_3,
		logo_4,
		logo_5,
		logo_6,
		logo_7,
		logo_8,
		logo_9,
		logo_10,
		logo_11,
		logo_12
	];
</script>

<Carousel.Root
	plugins={[plugin]}
	opts={{ loop: true, align: 'start' }}
	class="w-full "
	onmouseenter={plugin.stop}
	onmouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each items as item, i (i)}
			<Carousel.Item class="basis-1/6 ">
				<div class="p-1">
					<Card.Root class="border-white shadow-none">
						<Card.Content class="flex items-center justify-center p-6">
							<enhanced:img class="aspect-video object-contain" src={item} alt="" />
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>

<script lang="ts" module>
	import { scale } from 'svelte/transition';

	import { browser } from '$app/environment';

	import { Carousel } from '^components/ui';
	import { toggleBodyScroll } from '^helpers';
</script>

<script lang="ts">
	let { isOpen = $bindable(), onClickClose } = $props<{
		isOpen: boolean;
		onClickClose: () => void;
	}>();

	$effect(() => {
		$: browser && toggleBodyScroll({ triggerDisableOn: isOpen });
	});
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 grid place-items-center bg-white/90"
		transition:scale={{ start: 0.9 }}
	></div>

	<div class="fixed inset-0 z-[60] grid place-items-center" transition:scale={{ start: 0.9 }}>
		<div>
			<div
				class="md/lg:border-[12px] border-bc-pale-sandstone relative mx-2 overflow-visible border-[8px] lg:border-[16px]"
			>
				<button
					class="md/lg:right-[-14px] border-bc-sea-foam-teal absolute -top-[12px] right-[-10px] z-10 -translate-y-full cursor-pointer rounded-full border-4 bg-white px-2 py-1 text-[15px] font-medium tracking-wide text-black/70 uppercase md:-top-[16px] md:right-[-12px] lg:-right-[20px] xl:-top-[24px]"
					onclick={onClickClose}
					type="button"
				>
					close form
				</button>

				<div class="flex h-[80vh] max-h-[800px] w-[95vw] max-w-[800px] flex-col bg-white p-2">
					<div class="flex items-start justify-between">
						<h3 class="font-display text-bc-amber text-3xl font-bold">The Birch Collective</h3>
						<h2 class="text-my-grey-1 text-[15px] font-medium tracking-wide uppercase">
							Programme Signup
						</h2>
					</div>

					<div class="relative m-6 mt-4 grow">
						<Carousel.Root
							class="absolute inset-0 grid place-items-center border border-red-600"
							opts={{ align: 'center' }}
						>
							<Carousel.Content>
								<Carousel.Item class="w-full ">
									<div class="p-1">Hello</div>
								</Carousel.Item>

								<Carousel.Item>
									<div class="p-1">NUMBER 2</div>
								</Carousel.Item>
							</Carousel.Content>

							<Carousel.Previous />
							<Carousel.Next />
						</Carousel.Root>
					</div>

					<div class="flex shrink-0 justify-center">
						<button class="p-2" type="button">Start</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

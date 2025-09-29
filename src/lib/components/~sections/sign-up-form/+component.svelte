<script lang="ts" module>
	import { scale } from 'svelte/transition';

	import { browser } from '$app/environment';

	import { toggleBodyScroll } from '^helpers';
	import { slides } from '^content/sign-up-form';

	import { Card, Carousel } from '^components/ui';
</script>

<script lang="ts">
	let { isOpen = $bindable(), onClickClose } = $props<{
		isOpen: boolean;
		onClickClose: () => void;
	}>();

	$effect(() => {
		$: browser && toggleBodyScroll({ triggerDisableOn: isOpen });
	});

	let activeSlide: 'intro' = 'intro';
	let permitGoToNext = $derived.by(() => {
		if (activeSlide === 'intro') {
			return true;
		}
	});
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 grid place-items-center bg-white/90"
		transition:scale={{ start: 0.9 }}
	></div>

	<div class="fixed inset-0 z-[60] grid place-items-center" transition:scale={{ start: 0.9 }}>
		<div>
			<div class="relative mx-2 overflow-visible shadow-xl">
				<button
					class="border-bc-sea-foam-teal bg-my-grey-1 absolute -top-[12px] right-0 z-10 -translate-y-full cursor-pointer rounded-full px-2 py-1 text-[15px] font-medium tracking-wide text-white md:-top-[16px] xl:-top-[24px]"
					onclick={onClickClose}
					type="button"
				>
					Close
				</button>

				<div
					class="flex h-[80vh] max-h-[800px] w-[95vw] max-w-[800px] flex-col rounded-sm bg-white px-4 py-3"
				>
					<div class="bg-my-grey-3/5 flex items-start justify-between p-3">
						<h3 class="font-display text-bc-amber text-3xl font-bold">
							<span class="text-black">The Birch Collective</span>
						</h3>
						<h2 class="font-display text-bc-amber text-3xl font-bold">Programme Signup</h2>
					</div>

					<div class="relative flex grow flex-col">
						<Carousel.Root class="flex grow flex-col " opts={{ align: 'center' }}>
							<Carousel.Content
								hiddenParentClass="grow flex flex-col px-6"
								class="ml-0 w-full grow "
							>
								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 grid grow place-items-center border-none shadow-none">
										<Card.Content class="p-6 text-lg leading-relaxed">
											<p class="font-medium">{slides.intro.title}</p>
											<p class="mt-4">{slides.intro.text}</p>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
							</Carousel.Content>

							<div
								class="bg-my-grey-3/5 relative mt-4 flex w-full shrink-0 items-center justify-between p-3"
							>
								<Carousel.Previous class="static translate-none" />

								<button class="p-2" type="button">Start</button>

								<Carousel.Next class="static translate-none" />
							</div>
						</Carousel.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

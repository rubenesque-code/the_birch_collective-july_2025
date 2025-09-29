<script lang="ts" module>
	import { scale } from 'svelte/transition';

	import { browser } from '$app/environment';

	import { slides } from '^content/sign-up-form';
	import { toggleBodyScroll } from '^helpers';

	import { Card, Carousel } from '^components/ui';
	import NextButton from './next-button.svelte';
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

	let permitGoNext = $derived.by(() => {
		if (activeSlide === 'intro') {
			return true;
		}

		return false;
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
					class="bg-my-grey-1 absolute -top-[12px] right-0 z-10 -translate-y-full cursor-pointer rounded-full px-2 py-1 text-[15px] font-medium tracking-wide text-white md:-top-[16px] xl:-top-[24px]"
					onclick={onClickClose}
					type="button"
				>
					Close
				</button>

				<div
					class="flex h-[80vh] max-h-[800px] w-[95vw] max-w-[800px] flex-col rounded-sm bg-white px-4 py-3"
				>
					<div class="bg-my-grey-3/5 flex items-start justify-between p-3">
						<h3 class="font-display text-3xl font-bold">
							<span class="text-black">The Birch Collective</span>
						</h3>
						<h2 class="font-display text-bc-slate-pine text-3xl font-bold">Programme Signup</h2>
					</div>

					<div class="relative flex grow flex-col">
						<Carousel.Root class="flex grow flex-col " opts={{ align: 'center' }}>
							<Carousel.Content
								hiddenParentClass="grow flex flex-col px-6"
								class="ml-0 w-full grow "
							>
								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<div class="grid grow place-items-center">
												<div>
													<Card.Title class="font-medium">{slides.intro.title}</Card.Title>

													<p class="mt-8">{slides.intro.text}</p>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>

								<Carousel.Item class="flex basis-full flex-col pl-0">
									<Card.Root class="ml-0 flex grow flex-col border-none shadow-none">
										<Card.Content class="flex grow flex-col p-6 text-lg leading-relaxed">
											<Card.Title
												class="decoration-bc-slate-pine/20 font-display text-[22px] font-bold tracking-wide text-black/50 uppercase underline decoration-2 underline-offset-4"
												>Confidentiality</Card.Title
											>

											<div class="grid max-h-full grow place-items-center overflow-auto">
												<div>
													<p class="mt-8 leading-relaxed">
														First up, we need you to read and understand our confidentiality
														statement: Anything you talk about with one of our team is kept totally
														private within Birch. We won't share what you tell us with anyone else.
														But if there was an extreme situation, like if you or someone else was
														at risk of being seriously hurt, then we would need to break
														confidentiality to keep you safe. If this happened we would discuss it
														with you first and do our best to make sure you were involved in any
														decisions that have to be made. We know this can be scary and you might
														not want us to share anything, but we will support you through the whole
														thing.
													</p>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</Carousel.Item>
							</Carousel.Content>

							<div
								class="bg-my-grey-3/5 relative mt-4 flex w-full shrink-0 items-center justify-between p-3"
							>
								<Carousel.Previous class="static translate-none" />

								<NextButton bind:permitGoNext />

								<Carousel.Next class="static translate-none cursor-pointer" />
							</div>
						</Carousel.Root>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

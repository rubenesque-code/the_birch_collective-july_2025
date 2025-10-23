<script lang="ts" module>
	import image from '^assets/image';
	import { Input, Label } from '^components/ui';
	import { ImageHeader } from '^components/~sections';

	import { ArrowRight } from 'phosphor-svelte';
</script>

<div class="relative max-w-screen overflow-hidden pb-40">
	<ImageHeader
		heading="Donate"
		lead="100% of your donation goes directly to funding our programmes"
		align="center-left"
	/>

	<section class="section-mt-md section-x-padding">
		<div class="flex w-full justify-center">
			<div class="w-full max-w-[768px] text-lg">
				<h2 class="section-title-bold text-left">Donate Today</h2>

				<div class="border-my-grey-3/70 mt-10 w-full rounded-lg border py-4">
					<div class="border-my-grey-3/70 border-b px-4 pb-4">
						<h3 class="font-medium">Choose amount</h3>
					</div>
					<div class="p-4">
						<div>
							<p class="text-black/60 italic">This is a one-time payment</p>
						</div>

						<div class="mt-6 grid grid-cols-6 gap-4">
							{#each [5, 10, 25, 50, 100, 250] as item}
								<div class="basis-1/6">
									<button class="border-my-grey-3/80 w-full rounded-lg border p-3" type="button">
										£{item}
									</button>
								</div>
							{/each}
						</div>
						<div class="relative mt-6">
							<Label
								class="absolute top-1/2 left-4 -translate-y-1/2 text-lg text-black/30"
								for="custom-amount">£</Label
							>
							<Input
								class="border-my-grey-3/30 max-w-[500px] !p-6 !pl-9 !text-lg"
								placeholder="Custom amount"
								id="custom-amount"
								type="text"
							/>
						</div>

						<div class="mt-8">
							<button
								class="flex cursor-pointer items-center gap-4 rounded-sm border border-black p-3"
								type="button"
								><span>To payment</span>
								<span>
									<ArrowRight />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-16 px-60">
		<div class="flex w-full justify-center">
			<div class="flex w-full max-w-[768px] justify-between gap-24">
				<p class="text-xl leading-relaxed text-black/70">
					Your donation will help us to continue to work alongside people to find ways to connect to
					others, themselves and the natural world. In the difficult times we are living through,
					your donation, however small or large will help us continue to develop and deepen
					relationships with the natural world that are based on reciprocity and care.
				</p>

				<!-- <div class="shrink-0">
					<enhanced:img
						class="border-my-grey-3/30 w-[430px] rounded-xl border-[8px]"
						src={image.placeholder.caregiver_with_partipant_face_to_face}
						alt=""
					/>
				</div> -->
			</div>
		</div>
	</section>
</div>

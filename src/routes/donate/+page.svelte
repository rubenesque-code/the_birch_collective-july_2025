<script lang="ts" module>
	import image from '^assets/image';
	import { Input, Label } from '^components/ui';

	import { Navigation } from '^components/~sections';
	import { ArrowRight } from 'phosphor-svelte';
</script>

<Navigation />

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-60 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="relative flex w-full justify-end">
			<div class="max-w-[600px] text-white">
				<h1 class="font-display text-right text-7xl font-bold tracking-wide">Donate</h1>
				<p class="mt-5 text-right text-[22px] leading-relaxed font-medium">
					100% of your donation goes directly to funding our programmes
				</p>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="w-full max-w-[768px]">
				<h2 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">Donate Today</h2>
			</div>
		</div>
	</section>

	<section class="mt-12 px-60">
		<div class="flex w-full justify-center">
			<div class="w-full max-w-[768px] text-lg">
				<div class="border-my-grey-3/70 w-full rounded-lg border py-4">
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

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="mt-6 text-xl leading-relaxed text-black/70">
					Your donation will help us to continue to work alongside people to find ways to connect to
					others, themselves and the natural world. In the difficult times we are living through,
					your donation, however small or large will help us continue to develop and deepen
					relationships with the natural world that are based on reciprocity and care.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>

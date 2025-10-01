<script lang="ts" module>
	import { ArrowUpRight } from 'phosphor-svelte';

	import image from '^assets/image';

	import { location_map, poster } from '^assets/images/programmes/steering-group';

	import { whatToExpectSection } from '^content/steering-group';

	import { ImageModal } from '^components';
	import { Navigation } from '^components/~sections';
</script>

<script lang="ts">
	let showLocationMap = false;
	let showPoster = false;
</script>

<Navigation />

<ImageModal
	bind:isOpen={showLocationMap}
	onClickClose={() => (showLocationMap = false)}
	src={location_map}
	isEnhanced
>
	<a
		class="mt-2 flex items-center gap-2 text-lg text-black/90 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30"
		href="https://maps.app.goo.gl/w2jC73MNCMKMEh4P9"
		target="_blank"><span>See on Google maps</span><span><ArrowUpRight /></span></a
	>
</ImageModal>

<ImageModal
	bind:isOpen={showPoster}
	onClickClose={() => (showPoster = false)}
	src={poster}
	border={false}
	isEnhanced
></ImageModal>

<div class="relative max-w-screen overflow-hidden pb-40">
	<section class="relative flex justify-center overflow-visible px-80 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="mt-10 flex w-full items-end gap-40">
			<div class="relative flex">
				<div class="max-w-[600px] text-white">
					<h1 class="font-display text-my-pale-yellow text-7xl font-bold tracking-wide">
						Steering Group Workshops
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						Three interactive workshops on Mental Health, Social Action & Nature — led by and for
						18–25s.
					</p>
				</div>
			</div>

			<div class="">
				<a
					class="shrink-0 cursor-pointer rounded-full bg-white/90 px-5 py-[10px] text-[20px] font-medium tracking-wide whitespace-nowrap text-black/70 uppercase"
					href="https://form.jotform.com/252393595086367"
					target="_blank">Sign Up</a
				>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="text-xl leading-relaxed">
					Have Your Say — Shape the Future of The Birch Collective We’re inviting 16–25 year-olds in
					Bristol to join our three-week Steering Group workshops this November. Together we’ll
					explore how social action and nature can support mental health, build practical skills in
					leadership and facilitation, and co-design how young people guide the future of The Birch
					Collective.
				</p>
				<p class="mt-4 text-xl leading-relaxed">
					You’ll gain experience that looks great on your CV, meet new people, and have the chance
					to join our paid Youth Advisory Board in 2026. Travel costs are covered, free food and
					drinks are provided, and everyone who completes all three sessions will receive a £30
					voucher.
				</p>
				<p class="mt-4 text-xl leading-relaxed">No experience is needed — just bring your ideas.</p>

				<div class="mt-6 text-xl leading-relaxed">
					<div class="flex flex-col gap-[5px]">
						{#each [{ title: 'Dates', text: 'Wednesday 12th, 19th & 26th November' }, { title: 'Time', text: '5.30pm — 8.30pm' }, { title: 'Who For', text: '16 - 25 year olds in Bristol' }, { title: 'Cost', text: 'FREE (only 12 spaces available)' }, { title: 'Reward', text: '£30 shopping voucher for attending all 3 sessions' }] as item}
							<p class="flex items-center gap-1">
								<span class="font-display text-bc-amber text-[25px] font-bold">{item.title}</span>:
								<span class="text-[19px] text-black/90 uppercase">{item.text}</span>
							</p>
						{/each}

						<div class="mt-4 flex items-center gap-8">
							<div class="flex items-center gap-1">
								<p class="font-display text-bc-amber text-[25px] font-bold">Location</p>
								:
								<p class="relative text-[19px] text-black/90 uppercase">
									<span class="uppercase"
										>The Beehive Centre, 19A Stretford Rd, Whitehall, Bristol BS5 7AW</span
									>

									<a
										class="absolute bottom-0 left-0 flex translate-y-full items-center gap-2 text-lg text-black/60 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30"
										href="https://maps.app.goo.gl/w2jC73MNCMKMEh4P9"
										target="_blank"><span>See on google maps</span><span><ArrowUpRight /></span></a
									>
								</p>
							</div>

							<div
								class="border-my-grey-3/50 cursor-pointer border-[6px]"
								role="button"
								tabindex="0"
								aria-label="Show location map"
								onclick={() => (showLocationMap = true)}
								onkeydown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										showLocationMap = true;
									}
								}}
							>
								<enhanced:img class="w-[200px]" src={location_map} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Literature</h2>

			<h4 class="text-bc-slate-pine font-display text-[40px] font-bold capitalize">
				Our Poster With More Info
			</h4>

			<div class=" mt-12">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<enhanced:img
					class="max-h-[600px] w-[768px] cursor-pointer object-contain"
					onclick={() => (showPoster = true)}
					src={poster}
					alt=""
				/>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">What To Expect</h2>

			<div class="mt-[28px]">
				<div class="flex flex-col gap-8">
					{#each whatToExpectSection as { title, text, symbol }}
						<div>
							<div class="flex items-center gap-6">
								<h4
									class="text-bc-slate-pine font-display flex items-center gap-[6px] text-[40px] font-bold capitalize"
								>
									<span class="text-[28px]">{symbol}</span>
									<span>
										{title}
									</span>
								</h4>
							</div>

							<p class="mt-3 text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>

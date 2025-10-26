<script lang="ts" module>
	import { ArrowUpRight, MagnifyingGlassPlus } from 'phosphor-svelte';

	import { location_map, poster } from '^assets/images/programmes/steering-group';

	import { whatToExpectSection } from '^content/steering-group';

	import { ContentSectionContainer } from '^components/containers';
	import { ImageDialog } from '^components/~pages/free-programmes';
	import { ImageHeader } from '^components/~pages/programme';
</script>

<script lang="ts">
	let showLocationMap = false;
	let showPoster = false;
</script>

<ImageDialog
	isOpen={showPoster}
	imgSrc={poster}
	imgAlt=""
	title="<span class='text-bc-amber italic'>Steering Group</span> poster"
/>

<ImageDialog
	isOpen={showLocationMap}
	imgSrc={location_map}
	imgAlt=""
	title="How to get to <span class='text-bc-amber italic'>Steering Group</span>"
/>

<div class="relative max-w-screen overflow-hidden">
	<ImageHeader
		heading="Steering Group Workshops"
		lead={[
			'Three interactive workshops on Mental Health, Social Action & Nature — led by and for 18–25s.'
		]}
		align="center-left"
		headingColour="yellow"
	>
		<div class="4xl:mt-12 mt-8">
			<a
				class="xs-sm:px-5 xs-sm:py-[10px] relative flex cursor-pointer items-center gap-4 rounded-3xl bg-white px-3 py-2 tracking-wide"
				href="https://form.jotform.com/252393595086367"
				target="_blank"
			>
				<span class="xs-sm:text-lg 4xl:text-xl text-[15.5px] font-medium uppercase">Sign Up</span>
			</a>
		</div>
	</ImageHeader>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<div class="flex flex-col gap-8">
				<p class="leading-relaxed">
					Have Your Say — Shape the Future of The Birch Collective We’re inviting 16–25 year-olds in
					Bristol to join our three-week Steering Group workshops this November. Together we’ll
					explore how social action and nature can support mental health, build practical skills in
					leadership and facilitation, and co-design how young people guide the future of The Birch
					Collective.
				</p>
				<p class="leading-relaxed">
					You’ll gain experience that looks great on your CV, meet new people, and have the chance
					to join our paid Youth Advisory Board in 2026. Travel costs are covered, free food and
					drinks are provided, and everyone who completes all three sessions will receive a £30
					voucher.
				</p>
				<p class="">No experience is needed — just bring your ideas.</p>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-md">
		<ContentSectionContainer type="text">
			<div class="4xl:gap-3 flex flex-col gap-4 md:gap-[8px]">
				{#each [{ title: 'Dates', text: 'Wednesday 12th, 19th & 26th November' }, { title: 'Time', text: '5.30pm — 8.30pm' }, { title: 'Who For', text: '16 - 25 year olds in Bristol' }, { title: 'Cost', text: 'FREE (only 12 spaces available)' }, { title: 'Reward', text: '£30 shopping voucher for attending all 3 sessions' }] as item}
					<p class="info-line">
						<span class="info-title">{item.title}:</span>
						<span class="info-text">{item.text}</span>
					</p>
				{/each}

				<div class="flex flex-col">
					<p class="info-title">Location:</p>

					<div class="gap-4 md:mt-2 md:flex">
						<div
							class="border-my-grey-3/50 relative mt-1 max-w-[230px] cursor-pointer rounded-lg border-[4px] sm:max-w-[300px]"
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
							<enhanced:img class="aspect-[5/3] object-cover" src={location_map} alt="" />

							<p
								class="text-bc-logo-black/40 4xl:text-base absolute right-1 bottom-1 flex items-center gap-1 text-sm"
							>
								<span>Click to </span>
								<span><MagnifyingGlassPlus weight="light" /></span>
							</p>
						</div>

						<div class="relative mt-3">
							<p class="info-text">
								The Beehive Centre, 19A Stretford Rd, Whitehall, Bristol BS5 7AW
							</p>

							<a
								class="bottom-0 left-0 mt-1 flex items-center gap-2 text-lg text-black/60 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30 sm:mt-2"
								href="https://maps.app.goo.gl/32cRvbigC2fC3pPF9"
								target="_blank"><span>See on google maps</span><span><ArrowUpRight /></span></a
							>
						</div>
					</div>
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">What To Expect</h2>

			<div class="after-heading-sm-mt">
				<div class="flex flex-col gap-8">
					{#each whatToExpectSection as { title, text, symbol }}
						<div>
							<h4 class="sub-heading-lg flex gap-3">
								<span>{symbol}</span>
								<span>
									{title}
								</span>
							</h4>

							<p class="mt-3 leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</ContentSectionContainer>
	</section>

	<section class="section-mt-lg">
		<ContentSectionContainer type="text">
			<h2 class="heading-sm">Other</h2>

			<h4 class="sub-heading-lg after-heading-sm-mt">Some More Info</h4>

			<div class=" mt-12">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<enhanced:img
					class="max-h-[600px] w-[768px] cursor-pointer object-contain"
					onclick={() => (showPoster = true)}
					src={poster}
					alt=""
					role="button"
					tabindex="0"
				/>
			</div>
		</ContentSectionContainer>
	</section>
</div>

<!-- <section class="mt-24 flex justify-center px-60">
		<div class="">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Literature</h2>

			<h4 class="text-bc-slate-pine font-display text-[40px] font-bold capitalize">
				Our Poster With More Info
			</h4>

			<div class=" mt-12">
				<enhanced:img
					class="max-h-[600px] w-[768px] cursor-pointer object-contain"
					onclick={() => (showPoster = true)}
					src={poster}
					alt=""
				/>
			</div>
		</div>
	</section> -->

<style>
	.section-mt-xl {
		@apply mt-12 md:mt-20;
	}
	.section-mt-lg {
		@apply xs-sm:mt-14 4xl:mt-24 mt-10;
	}
	.section-mt-md {
		@apply xs-sm:mt-7 4xl:mt-16 mt-5;
	}

	.info-line {
		@apply 4xl:gap-2 flex flex-col gap-[2px] sm:gap-1 md:flex-row md:items-center;
	}
	.info-title {
		@apply font-display text-bc-amber 4xl:text-3xl text-[25px] font-bold capitalize;
	}
	.info-text {
		@apply 4xl:text-[23px] text-base text-black/90 uppercase md:text-[19px];
	}

	.heading-sm {
		@apply text-my-grey-1 4xl:text-lg text-[16px] font-medium tracking-wide uppercase;
	}
	.sub-heading-lg {
		@apply text-bc-slate-pine font-display 4xl:text-[48px] text-[40px] leading-[1.25em] font-bold capitalize;
	}
	.after-heading-sm-mt {
		@apply mt-3;
	}
	.after-sub-heading-lg-mt {
		@apply mt-6;
	}

	.image-gallery-row-container {
		@apply xs:h-[250px] 4xl:h-[400px] flex h-[220px] w-full gap-3 sm:h-[300px];
	}
</style>

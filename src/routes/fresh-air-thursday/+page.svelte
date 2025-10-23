<script lang="ts" module>
	import { ArrowUpRight } from 'phosphor-svelte';

	import image from '^assets/image';
	import {
		garden_shed_from_outside,
		group_and_facilitators_sitting_round_fireplace,
		indoor_workbench,
		james_and_participants_peace_sign,
		location_map,
		participant_woman_glasses
	} from '^assets/images/programmes/fresh-air-thursday';
	import {
		fresh_air_thursday_introduction,
		fresh_air_thursday_participant_testimonial_placeholder
	} from '^assets/videos';
	import { whatToExpectSection, whyJoinUsSection } from '^content/fresh-air-thursday';

	import { ImageModal } from '^components';
	import { ImageHeader } from '^components/~pages/programme';
	import { SignUpFormModal } from '^components/~sections';
</script>

<script lang="ts">
	import { TextSection, VideoSection } from '^components/~sections';

	let playIntro = false;
	let playTestimonial = false;
	let showLocationMap = false;
	let signUpFormIsOpen = false;
</script>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} onClickClose={() => (signUpFormIsOpen = false)} />

<ImageModal
	bind:isOpen={showLocationMap}
	onClickClose={() => (showLocationMap = false)}
	src={location_map}
	isEnhanced
>
	<a
		class="mt-2 flex items-center gap-2 text-lg text-black/90 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30"
		href="https://maps.app.goo.gl/32cRvbigC2fC3pPF9"
		target="_blank"><span>See on Google maps</span><span><ArrowUpRight /></span></a
	>
</ImageModal>

<div class="relative max-w-screen overflow-hidden pb-40">
	<ImageHeader
		heading="Fresh Air Thursdays"
		lead={[
			'A weekly group every Thursday. Currently running upto December 18th 2025',
			"5 minutes from St George's Park, Bristol"
		]}
		align="center-left"
		headingColour="yellow"
	>
		<div class="mt-8">
			<button
				class="xs-sm:px-5 xs-sm:py-[10px] relative flex cursor-pointer items-center gap-4 rounded-3xl bg-white px-3 py-2 tracking-wide"
				onclick={() => (signUpFormIsOpen = true)}
				type="button"
			>
				<span class="xs-sm:text-lg text-[17px] font-medium uppercase">Sign Up</span>
				<!-- <span class="xs-sm:text-2xl text-xl"><ArrowRight /></span> -->
			</button>
		</div>
	</ImageHeader>

	<TextSection
		body={[
			'Fresh is our weekly group for 16-25 year olds. We offer a range of activities designed at a pace to make learning accessible and to draw out your creativity. There is no fixed time limit to attendance, attend all year round, once a month or just one off, totally up to you. You can attend until your 26 birthday. If you are older the 26 or reach that age there are opportunities to return as peer mentor to support others, if this is of interest to you.'
		]}
		marginTop="lg"
	/>

	<section class="section-mt-md flex justify-center">
		<div class="section-x-padding box-content w-full max-w-[768px]">
			<div class="flex flex-col gap-4 md:gap-[5px]">
				{#each [{ title: 'currently running from', text: 'February 20th 2025 - December 18th 2025' }, { title: 'Time', text: '1pm — 5pm' }, { title: 'Age Group', text: 'anyone 16 — 25 years old' }, { title: 'Cost', text: 'free but booking is essential!' }] as item}
					<p class="flex flex-col gap-1 md:flex-row md:items-center">
						<span class="font-display text-bc-amber text-[25px] font-bold capitalize"
							>{item.title}:</span
						>
						<span class="text-base text-black/90 uppercase md:text-[19px]">{item.text}</span>
					</p>
				{/each}

				<div class="flex flex-col gap-8 md:flex-row md:items-center">
					<div class="flex flex-col gap-1 md:flex-row md:items-center">
						<p class="font-display text-bc-amber text-[25px] font-bold">Location:</p>

						<p class="relative text-[19px] text-black/90 uppercase">
							<span class="uppercase">Strawberry Lane Community Gardens</span>

							<a
								class="bottom-0 left-0 mt-2 flex items-center gap-2 text-lg text-black/60 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30 md:absolute md:mt-0 md:translate-y-full"
								href="https://maps.app.goo.gl/32cRvbigC2fC3pPF9"
								target="_blank"><span>See on google maps</span><span><ArrowUpRight /></span></a
							>
						</p>
					</div>

					<div
						class="border-my-grey-3/50 hidden cursor-pointer border-[6px] md:block"
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
	</section>

	<VideoSection
		title="Fresh — An Intro"
		poster={image.placeholder.banner_1}
		posterAlt=""
		videoSrc={fresh_air_thursday_introduction}
		ariaLabel=""
		bind:isOpen={playIntro}
		marginTop="lg"
	/>

	<section class="section-mt-lg flex justify-center">
		<div class="section-x-padding box-content w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">What To Expect</h2>

			<div class="mt-3 md:mt-[28px]">
				<div class="flex flex-col gap-8">
					{#each whatToExpectSection as { title, text }}
						<div>
							<div class="flex items-center gap-6">
								<h4
									class="text-bc-slate-pine font-display text-[40px] leading-[1.25em] font-bold capitalize"
								>
									{title}
								</h4>
							</div>

							<p class="mt-3 text-lg leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="section-mt-lg flex justify-center">
		<div class="section-x-padding box-content w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Why Join Us</h2>

			<h4 class="text-bc-slate-pine font-display text-[40px] leading-[1.25em] font-bold capitalize">
				This Is Suitable For You If You're
			</h4>

			<div class="mt-8">
				<div class="flex flex-col gap-3">
					{#each whyJoinUsSection as { text, symbols }}
						<p class="flex items-center gap-3">
							<!-- <span class="text-black/40">
								<Circle />
							</span> -->
							<span>{[symbols[0]]}</span>
							<span
								class="decoration-bc-amber/30 text-xl leading-[1.6em] text-black/90 underline-offset-2"
							>
								{text}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div>
			<p class="text-right text-black/70">
				Images from <span class="text-bc-amber font-medium italic">Fresh</span>
			</p>

			<div class="mt-1 flex h-[300px] gap-3">
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img
						class="h-full w-full"
						src={image.placeholder.caregiver_with_partipant_face_to_face}
						alt=""
					/>
				</div>

				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={garden_shed_from_outside} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={participant_woman_glasses} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[3200/2133] h-full">
					<enhanced:img
						class="h-full w-full"
						src={group_and_facilitators_sitting_round_fireplace}
						alt=""
					/>
				</div>
			</div>

			<div class="mt-3 flex h-[300px] gap-3">
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img class="h-full w-full" src={image.placeholder.axe_chopping} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[192/128] h-full">
					<enhanced:img class="h-full w-full" src={image.placeholder.chillies} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={james_and_participants_peace_sign} alt="" />
				</div>
				<div class="border-my-grey-3/40 aspect-[256/320] h-full">
					<enhanced:img class="h-full w-full" src={indoor_workbench} alt="" />
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="flex w-full max-w-[768px] flex-col items-center">
			<p class="text-lg text-black/80">
				<span class="italic"> Ready to get on board?</span>
				<span class="italic"> Fill out our online form - it takes around 3 minutes.</span>
			</p>

			<div class="flex justify-center">
				<div class="mt-4 flex items-center gap-8">
					<button
						class="font-display text-bc-amber cursor-pointer rounded-full px-5 py-3 text-4xl font-bold tracking-wide"
						onclick={() => (signUpFormIsOpen = true)}
						type="button">Sign Up Today</button
					>
				</div>
			</div>
		</div>
	</section>

	<section class="section-mt-md flex justify-center">
		<div>
			<div class="flex justify-center">
				<div class="section-x-padding box-content w-full max-w-[768px]">
					<div class="w-full">
						<div class="">
							<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">
								Feedback
							</h2>

							<h4
								class="text-bc-slate-pine font-display text-[40px] leading-[1.25em] font-bold capitalize"
							>
								What Participants Say
							</h4>
						</div>
					</div>
				</div>
			</div>

			<div class="section-mt-md flex justify-center">
				<div class="section-x-padding box-content w-full max-w-[900px]">
					<div class="relative">
						<p class="text-right text-base text-black/70">Participant testimonial</p>

						<button
							type="button"
							class="focus:ring-bc-amber relative mt-2 w-full rounded-md focus:ring-2 focus:outline-none"
							onclick={() => (playTestimonial = true)}
							aria-label="play video"
						>
							<enhanced:img
								class="w-full rounded-md"
								src={fresh_air_thursday_participant_testimonial_placeholder}
								alt={''}
							/>

							<span
								class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
								aria-hidden="true"
							>
								<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<!-- 	.my-grid {
		column-count: 4;
		column-gap: 1rem;
	} -->

<!-- <div class="mt-6">
						<p class="text-right text-black/70">
							Activities from <span class="italic">Fresh</span>
						</p>

						<div class="mt-1 flex h-[188px] gap-2">
							<div class="border-my-grey-3/40 aspect-[256/320] h-full">
								<enhanced:img class="h-full w-full" src={indoor_raised_bed} alt="" />
							</div>
							<div class="border-my-grey-3/40 aspect-[256/320] h-full">
								<enhanced:img class="h-full w-full" src={intertwined_reed_branches} alt="" />
							</div>
							<div class="border-my-grey-3/40 aspect-[256/320] h-full">
								<enhanced:img class="h-full w-full" src={garden_shed_from_outside} alt="" />
							</div>
							<div class="border-my-grey-3/40 aspect-[3200/2133] h-full">
								<enhanced:img
									class="h-full w-full"
									src={group_and_facilitators_sitting_round_fireplace}
									alt=""
								/>
							</div>
						</div>
					</div> -->

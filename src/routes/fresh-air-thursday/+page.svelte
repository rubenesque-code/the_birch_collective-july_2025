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
		fresh_air_thursday_participant_testimonial,
		fresh_air_thursday_participant_testimonial_placeholder
	} from '^assets/videos';
	import { whatToExpectSection, whyJoinUsSection } from '^content/fresh-air-thursday';

	import { ImageModal, VideoModal } from '^components';
	import { Navigation, SignUpFormModal } from '^components/~sections';
</script>

<script lang="ts">
	let playIntro = false;
	let playTestimonial = false;
	let showLocationMap = false;
	let signUpFormIsOpen = true;
</script>

<Navigation />

<SignUpFormModal bind:isOpen={signUpFormIsOpen} onClickClose={() => (signUpFormIsOpen = false)} />

<VideoModal
	bind:isOpen={playIntro}
	onClickClose={() => (playIntro = false)}
	mp4Src={fresh_air_thursday_introduction}
/>

<VideoModal
	bind:isOpen={playTestimonial}
	onClickClose={() => (playTestimonial = false)}
	mp4Src={fresh_air_thursday_participant_testimonial}
/>

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
	<section class="relative flex justify-center overflow-visible px-80 pt-32 pb-40">
		<div class="my-shape absolute top-0 left-0 -z-10 h-full w-full">
			<enhanced:img src={image.placeholder.banner_1} alt="" />

			<div class="from-bc-slate-pine absolute inset-0 bg-gradient-to-t to-transparent"></div>
		</div>

		<div class="mt-10 flex w-full items-end gap-40">
			<div class="relative flex">
				<div class="max-w-[600px] text-white">
					<h1 class="font-display text-my-pale-yellow text-7xl font-bold tracking-wide">
						Fresh Air Thursdays
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						A weekly group every Thursday. Currently running upto December 18th 2025
					</p>
					<p class="mt-5 text-[21px] leading-relaxed">5 minutes from St George's Park, Bristol</p>
				</div>
			</div>

			<div class="">
				<button
					class="shrink-0 cursor-pointer rounded-full bg-white/90 px-5 py-[10px] text-[20px] font-medium tracking-wide whitespace-nowrap text-black/70 uppercase"
					onclick={() => (signUpFormIsOpen = true)}
					type="button">Sign Up</button
				>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="text-xl leading-relaxed">
					Fresh is our weekly group for 16-25 year olds. We offer a range of activities designed at
					a pace to make learning accessible and to draw out your creativity. There is no fixed time
					limit to attendance, attend all year round, once a month or just one off, totally up to
					you. You can attend until your 26 birthday. If you are older the 26 or reach that age
					there are opportunities to return as peer mentor to support others, if this is of interest
					to you.
				</p>

				<div class="mt-6 text-xl leading-relaxed">
					<div class="flex flex-col gap-[5px]">
						{#each [{ title: 'currently running from', text: 'February 20th 2025 - December 18th 2025' }, { title: 'Time', text: '1pm — 5pm' }, { title: 'Age Group', text: 'anyone 16 — 25 years old' }, { title: 'Cost', text: 'free but booking is essential!' }] as item}
							<p class="flex items-center gap-1">
								<span class="font-display text-bc-amber text-[25px] font-bold">{item.title}</span>:
								<span class="text-[19px] text-black/90 uppercase">{item.text}</span>
							</p>
						{/each}

						<div class="flex items-center gap-8">
							<div class="flex items-center gap-1">
								<p class="font-display text-bc-amber text-[25px] font-bold">Location</p>
								:
								<p class="relative text-[19px] text-black/90 uppercase">
									<span class="uppercase">Strawberry Lane Community Gardens</span>

									<a
										class="absolute bottom-0 left-0 flex translate-y-full items-center gap-2 text-lg text-black/60 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30"
										href="https://maps.app.goo.gl/32cRvbigC2fC3pPF9"
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

	<section class="mt-24 px-60">
		<div class=" flex justify-center">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative cursor-pointer"
				onclick={() => {
					playIntro = true;
				}}
			>
				<enhanced:img class="w-[900px] rounded-md" src={image.placeholder.banner_1} alt="" />

				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
				</div>

				<div class="absolute top-2 right-2">
					<p class="text-[17px] font-medium text-white">Fresh — An Intro</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">What To Expect</h2>

			<div class="mt-[28px]">
				<div class="flex flex-col gap-8">
					{#each whatToExpectSection as { title, text, symbols }}
						<div>
							<!-- <p class="flex items-center gap-2 opacity-70">
								{#each symbols as symbol}
									<span>{symbol}</span>
								{/each}
							</p> -->

							<div class="flex items-center gap-6">
								<h4 class="text-bc-slate-pine font-display text-[40px] font-bold capitalize">
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

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<!-- <h2 class="font-display text-bc-amber text-[44px] font-bold">Who Is This Suitable For</h2> -->
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Why join us</h2>
			<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
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
					<p class="mt-2 text-xl">Or for any other reason!</p>
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

	<section class="mt-24">
		<div class="flex w-full justify-center px-60">
			<div class="w-full max-w-[768px]">
				<div class="">
					<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Feedback</h2>
					<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
						What Participants Say
					</h4>

					<!-- <div class="mt-8 flex flex-col gap-6">
						<p class="text-xl leading-relaxed">
							"The time I got to spend with others on camp was so magical and beautiful I can’t
							fully describe it. If you're struggling with mental health or socialising, please give
							it a go."
						</p>
						<p class="text-xl leading-relaxed">
							"It was one of the best times of my life. I made friends, tested myself, and learned
							more about the world and myself."
						</p>
						<p class="text-xl leading-relaxed">
							"It gave me the confidence boost I needed and helped me feel more like myself."
						</p>
					</div> -->
				</div>
			</div>
		</div>

		<div class="mt-12 px-60">
			<!-- <div class="mt-16 px-60"> -->
			<div class=" flex justify-center">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="relative cursor-pointer"
					onclick={() => {
						playTestimonial = true;
					}}
				>
					<enhanced:img
						class="w-[900px] rounded-md"
						src={fresh_air_thursday_participant_testimonial_placeholder}
						alt=""
					/>

					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
					</div>

					<div class="absolute top-2 right-2">
						<p class="text-[17px] font-medium text-white">Participant Testimonial</p>
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="mt-12 flex w-full justify-center px-60">
			<div class="w-full max-w-[768px]">
				<div class="">
					<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
						What Referrers Say
					</h4>

					<div class="mt-6 flex flex-col gap-6">
						<div>
							<p class="text-xl leading-relaxed">
								"B reflected on how Camp Birch helped her feel more connected to herself and nature.
								She came away with tools for managing stress and adjusting to university life."
							</p>
							<p class="mt-2 text-xl text-black/70">
								— Emma Martin | Senior Personal Adviser | Bristol Through Care Team
							</p>
						</div>

						<div>
							<p class="text-xl leading-relaxed">
								"Camp Birch had a huge impact on our young people. Many came back more confident and
								motivated to re-engage with education, volunteering and wellbeing activities. I’d
								highly recommend The Birch Collective — plus it looked like so much fun"
							</p>
							<p class="mt-2 text-xl text-black/70">
								— Rosie Kinnear | Youth Development Lead | The Prince's Trust
							</p>
						</div>
					</div>
				</div>
			</div>
		</div> -->
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

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>

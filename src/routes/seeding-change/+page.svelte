<script lang="ts" module>
	import image from '^assets/image';
	import {
		garden_shed_from_outside,
		group_and_facilitators_sitting_round_fireplace,
		indoor_workbench,
		james_and_participants_peace_sign,
		participant_woman_glasses
	} from '^assets/images/programmes/fresh-air-thursday';
	import { seeding_change_intro, seeding_change_intro_still } from '^assets/videos';
	import {
		benefits,
		details,
		whatToExpectSection,
		whyJoinUsSection
	} from '^content/seeding-change';

	import { VideoModal } from '^components';
	import { Navigation, SignUpFormModal } from '^components/~sections';
	import { Circle } from 'phosphor-svelte';
</script>

<script lang="ts">
	let playIntro = false;
	let playTestimonial = false;
	let signUpFormIsOpen = false;
</script>

<Navigation />

<SignUpFormModal bind:isOpen={signUpFormIsOpen} onClickClose={() => (signUpFormIsOpen = false)} />

<VideoModal
	bind:isOpen={playIntro}
	onClickClose={() => (playIntro = false)}
	mp4Src={seeding_change_intro}
/>

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
						Seeding Change: Plant your future
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						A FREE camp for 18–25-year-olds who are feeling low, unmotivated, or ready for a fresh
						start — connect with nature, yourself, and others, just 35 minutes from Bristol.
					</p>
				</div>
			</div>

			<div class="relative">
				<button
					class="shrink-0 cursor-pointer rounded-full bg-white/90 px-5 py-[10px] text-[20px] font-medium tracking-wide whitespace-nowrap text-black/70 uppercase opacity-70"
					type="button">Sign Up</button
				>
				<p class="absolute -bottom-2 translate-y-full whitespace-nowrap text-white">
					Applications now closed.
				</p>
			</div>
		</div>
	</section>

	<section class="mt-10 px-60">
		<div class="flex w-full justify-center">
			<div class="max-w-[768px]">
				<p class="text-xl leading-relaxed">
					Seeding Change is a free or pay-what-you-can programme for 18–25-year-olds in Bristol who
					want to feel more connected, confident, and inspired. Over 7 months, you’ll join two
					seasonal camps and monthly evening sessions to explore nature, learn new skills, and
					reflect on what matters to you. Whether you're feeling stuck, stressed, or simply ready
					for a change, this is a chance to pause, grow, and discover your next steps—supported by a
					warm and welcoming community.
				</p>

				<div class="mt-6 text-xl leading-relaxed">
					<div class="flex flex-col gap-[5px]">
						<p class="flex gap-1">
							<span class="font-display text-bc-amber text-[25px] font-bold">Dates</span>:
							<span class="flex flex-col">
								{#each ['First 2 night Camp: 5th - 7th September', 'Second 3 night Camp: 2nd - 5th April with 5 evening Meet-ups in Aug', 'Oct, Dec, Feb & March over 7 months.', ' Participation needed throughout.'] as item}
									<span class="text-[19px] text-black/90 uppercase">{item}</span>
								{/each}
							</span>
						</p>
						{#each [{ title: 'Who for?', text: '18 - 25 year olds in Bristol' }, { title: 'Where', text: 'A beautiful location in wales 35 minutes from Bristol' }, { title: 'Cost', text: 'Ranges - free and pay what you can' }] as item}
							<p class="flex items-center gap-1">
								<span class="font-display text-bc-amber text-[25px] font-bold">{item.title}</span>:
								<span class="text-[19px] text-black/90 uppercase">{item.text}</span>
							</p>
						{/each}
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
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Details</h2>
			<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				What is Seeding Change
			</h4>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each details as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-xl leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Activities</h2>
			<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">What to expect</h4>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each whatToExpectSection as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-xl leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Benefits</h2>
			<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				What You’ll Get From This Journey
			</h4>

			<div class="mt-[20px]">
				<div class="flex flex-col gap-3">
					{#each benefits as text}
						<div class="flex items-center gap-3">
							<span class="text-bc-amber/30">
								<Circle />
							</span>
							<p class="text-xl leading-relaxed">{text}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">Why join us</h2>
			<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				This Is Suitable For You If You
			</h4>

			<div class="mt-8">
				<div class="flex flex-col gap-3">
					{#each whyJoinUsSection as { text, symbol }}
						<p class="flex items-center gap-3">
							<span>{symbol}</span>
							<span
								class="decoration-bc-amber/30 text-xl leading-[1.6em] text-black/90 underline-offset-2"
							>
								{text}
							</span>
						</p>
					{/each}
					<p class="mt-2 text-lg">And other reasons!</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">The Costs</h2>
			<h4 class="text-bc-slate-pine font-display mt-4 text-[44px] font-bold">
				Pay what you can — How It Works
			</h4>

			<div class="mt-8">
				<p class="text-lg leading-relaxed">
					The true cost of a place on Seeding Change is £750 per person. The cost reflects:
				</p>

				<div class="mt-4 flex flex-col gap-4 text-lg leading-relaxed">
					<div class="flex items-center gap-3">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>Four trained facilitators (1:3 ratio)</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>A camp chef and all meals/snacks</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>Return minibus travel from Bristol</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>Access to all equipment and kit</p>
					</div>
					<div class="flex items-center gap-2">
						<span class="text-bc-amber/30 text-[10px]">
							<Circle weight="fill" />
						</span>
						<p>
							27 acres of wild woodland at Botany Bay Activity Centre We’ve been generously funded
							to make this programme free or affordable to anyone who needs it. But if you’re in a
							position to contribute something, your donation helps us keep running camps in future
							for people who might have a little less
						</p>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div>
			<p class="text-right text-black/70">
				Images from <span class="text-bc-amber font-medium italic">Seeding Change</span>
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

					<div class="mt-8 flex flex-col gap-6">
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
					</div>
				</div>
			</div>
		</div>

		<div class="mt-16 px-60">
			<div class=" flex justify-center">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="relative cursor-pointer"
					onclick={() => {
						playTestimonial = true;
					}}
				>
					<enhanced:img class="w-[900px] rounded-md" src={seeding_change_intro_still} alt="" />

					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
					</div>

					<div class="absolute top-2 right-2">
						<p class="text-[17px] font-medium text-white">Participant Testimonial</p>
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="mt-8 flex justify-center">
					<div
						class="relative cursor-pointer"
						on:click={() => {
							playTestimonial = true;
						}}
					>
						<p class="text-right text-black/70">Participant Testimonial</p>
						<enhanced:img
							class="mt-2 w-[900px] rounded-md"
							src={fresh_air_thursday_participant_testimonial_placeholder}
							alt=""
						/>

						<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
						</div>
					</div>
				</div> -->
		<div class="mt-12 flex w-full justify-center px-60">
			<div class="w-full max-w-[768px]">
				<div class="">
					<!-- <h3 class="font-display text-bc-slate-pine text-5xl font-bold">What Referrers Say</h3> -->
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

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
</style>

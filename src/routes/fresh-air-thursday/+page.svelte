<script lang="ts" module>
	import image from '^assets/image';
	import {
		fresh_air_thursday_introduction,
		fresh_air_thursday_participant_testimonial,
		fresh_air_thursday_participant_testimonial_placeholder
	} from '^assets/videos';

	import { Navigation } from '^components/~sections';
	import { VideoModal } from '^components';
	import { location_map } from '^assets/images/programmes/fresh-air-thursday';
</script>

<script lang="ts">
	import { ArrowUpRight } from 'phosphor-svelte';

	let playIntro = false;
	let playTestimonial = false;
</script>

<Navigation />

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
					class="shrink-0 rounded-full bg-white/90 px-5 py-[10px] text-[20px] font-medium tracking-wide whitespace-nowrap text-black/70 uppercase"
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
									<span>Strawberry Lane Community Gardens,</span>

									<a
										class="absolute bottom-0 left-0 flex translate-y-full items-center gap-2 text-lg text-black/60 decoration-transparent underline-offset-2 transition-colors duration-200 ease-linear hover:underline hover:decoration-black/30"
										href="https://maps.app.goo.gl/32cRvbigC2fC3pPF9"
										target="_blank"><span>see on google maps</span><span><ArrowUpRight /></span></a
									>
								</p>
							</div>

							<div class="border-my-grey-3/50 border-[6px]">
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
				on:click={() => {
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
			<h2 class="font-display text-bc-slate-pine text-6xl font-bold">What To Expect</h2>

			<div class="mt-12">
				<div class="flex flex-col gap-8">
					<div>
						<h4 class="text-xl font-medium text-black/80">Nature based craft</h4>
						<p class="mt-4 text-lg">
							Making all manner of things from willow with our resident willow expert Amy, from
							baskets to bird feeders, fences to climbing structures for plants. - Natural and
							traditional building techniques - such as using cob, building using round wood timber
							or using hazel to make fences. - Making functional or decorative items from found and
							foraged items in the garden or nearby woodland.
						</p>
					</div>

					<div>
						<h4 class="text-xl font-medium text-black/80">Organic horticulture and permaculture</h4>
						<p class="mt-4 text-lg">
							Our team has many years experience in growing organic vegetables. We will explore and
							offer learning in a range of wildlife friendly food growing and horticulture
							techniques and practices. - We also explore wider land management techniques such as;
							coppicing, hedging, habitat creation and permaculture techniques for designing spaces.
						</p>
					</div>
					<div>
						<h4 class="text-xl font-medium text-black/80">Cookery</h4>
						<p class="mt-4 text-lg">
							Outdoor cookery or cooking on the campfire is a fine art and also a greatly satisfying
							process. - Ro is a master and loves teaching people suitable recipes but importantly
							how to build and maintain fires that allow you to cook a wide range of treats, without
							ending up with burnt grub!
						</p>
					</div>
					<div>
						<h4 class="text-xl font-medium text-black/80">
							Nature based awareness and mindfulness techniques
						</h4>
						<p class="mt-4 text-lg">
							Alongside all the 'doing' we also encourage people to just be. - During sessions we
							will share with you simple practices to enable you to feel a greater sense of inner
							peace, calm and aid in managing stress. - We suggest ways to use the natural world as
							the lens through which to see the world and our personal struggles through, offering
							new perspective and comfort.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="font-display text-bc-slate-pine text-6xl font-bold">Who Is This Suitable For</h2>

			<div class="mt-12">
				<div class="flex flex-col gap-4">
					<p class="text-[19px] underline">
						Anyone seeking to spend more time in the outdoors and meet new people.
					</p>
					<p class="text-[19px] underline">Struggling with family and relationship issues.​</p>
					<p class="text-[19px] underline">Experiencing feelings of loneliness or isolation​.</p>
					<p class="text-[19px] underline">Struggling to engage with study​​.</p>
					<p class="text-[19px] underline">Not in education, employment or training​.</p>
					<p class="text-[19px] underline">Experiencing low-level mental health issues.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="my-grid">
			<enhanced:img
				class="mb-4 h-full w-full object-cover"
				src={image.placeholder.caregiver_with_partipant_face_to_face}
				alt=""
			/>
			<enhanced:img
				class="mb-4 h-full w-full object-cover"
				src={image.placeholder.axe_chopping}
				alt=""
			/>
			<enhanced:img
				class="mb-4 h-full w-full object-cover"
				src={image.placeholder.standing_around_fire}
				alt=""
			/>
			<enhanced:img
				class="mb-4 h-full w-full object-cover"
				src={image.placeholder.james_and_helper_talking_to_participant}
				alt=""
			/>
			<enhanced:img
				class="mb-4 h-full w-full object-cover"
				src={image.placeholder.chillies}
				alt=""
			/>
			<enhanced:img
				class="mb-4 h-full w-full object-cover"
				src={image.placeholder.fresh_air_thursday_sign}
				alt=""
			/>
			<enhanced:img
				class="mb-4 h-full w-full object-cover"
				src={image.placeholder.banner_10}
				alt=""
			/>
			<enhanced:img class="h-full w-full object-cover" src={image.placeholder.banner_15} alt="" />
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<div class="h-[1px] w-[300px] border border-black/10"></div>
			<p class="mt-10 text-xl font-medium text-black/80 italic">Ready to get on board?</p>

			<div class="mt-8 flex items-center gap-8">
				<button
					class="bg-my-pale-yellow rounded-full px-5 py-3 text-lg font-medium tracking-wide text-black/80"
					type="button">Sign Up Today</button
				>

				<p class="">(It takes around 3 minutes)</p>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<div class="">
				<h3 class="font-display text-bc-slate-pine text-5xl font-bold">What Participants Say</h3>
				<div class="mt-8 flex flex-col gap-6">
					<p class="text-xl leading-relaxed">
						"The time I got to spend with others on camp was so magical and beautiful I can’t fully
						describe it. If you're struggling with mental health or socialising, please give it a
						go."
					</p>
					<p class="text-xl leading-relaxed">
						"It was one of the best times of my life. I made friends, tested myself, and learned
						more about the world and myself."
					</p>
					<p class="text-xl leading-relaxed">
						"It gave me the confidence boost I needed and helped me feel more like myself."
					</p>
				</div>

				<div class="mt-8 flex justify-center">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
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
				</div>
			</div>

			<div class="mt-12">
				<h3 class="font-display text-bc-slate-pine text-5xl font-bold">What Referrers Say</h3>

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
	</section>
</div>

<style>
	.my-shape {
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
	}
	.my-grid {
		column-count: 4;
		column-gap: 1rem;
	}
</style>

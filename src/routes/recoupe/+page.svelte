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
		fresh_air_thursday_participant_testimonial_placeholder,
		recoupe_intro,
		recoupe_participant_still,
		recoupe_participant_testimonial
	} from '^assets/videos';
	import { whatToExpectSection, whyJoinUsSection } from '^content/recoupe';

	import { ImageModal, VideoModal } from '^components';
	import { SignUpFormModal } from '^components/~sections';
</script>

<script lang="ts">
	let playIntro = false;
	let playTestimonial = false;
	let showLocationMap = false;
	let signUpFormIsOpen = false;
</script>

<SignUpFormModal bind:isOpen={signUpFormIsOpen} onClickClose={() => (signUpFormIsOpen = false)} />

<VideoModal
	bind:isOpen={playIntro}
	onClickClose={() => (playIntro = false)}
	mp4Src={recoupe_intro}
/>

<VideoModal
	bind:isOpen={playTestimonial}
	onClickClose={() => (playTestimonial = false)}
	mp4Src={recoupe_participant_testimonial}
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
						Recoupe: Working Woods
					</h1>

					<p class="mt-5 text-[21px] leading-relaxed font-medium">
						A weekly woodland sessions using traditional skills in Troopers Hill Woods
					</p>
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
					Recoupe is a regenerative ecological project breathing new life into Troopers Hill Woods.
					Our focus is to work sensitively with the land to create a thriving and diverse working
					woodland. We will mainly use hand tools and apply traditional woodland management
					techniques such as coppicing, charcoal burning, and hedge laying. This allows us to
					produce local products like: Beanpoles, pea sticks, Charcoal and Materials for traditional
					crafts, ensuring all parts of the tree are utilised.
				</p>

				<div class="mt-6 text-xl leading-relaxed">
					<div class="flex flex-col gap-[5px]">
						{#each [{ title: 'currently running from', text: 'March 2025 - March 2026' }, { title: 'When', text: 'Tuesdays, 1pm — 5pm' }, { title: 'Age Group', text: 'anyone aged 18+' }, { title: 'Cost', text: 'free but booking is essential!' }] as item}
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
					<p class="text-[17px] font-medium text-white">Recoupe — An Intro</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-24 flex justify-center px-60">
		<div class="w-full max-w-[768px]">
			<h2 class="text-my-grey-1 text-[16px] font-medium tracking-wide uppercase">What To Expect</h2>

			<div class="mt-[28px]">
				<div class="flex flex-col gap-8">
					{#each whatToExpectSection as { title, text }}
						<div>
							<!-- <p class="flex items-center gap-2 opacity-70">
								{#each symbols as symbol}
									<span>{symbol}</span>
								{/each}
							</p> -->

							<div class="flex items-center gap-6">
								<h4 class="text-bc-slate-pine font-display text-[36px] font-bold capitalize">
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
				This Is Suitable For You If You
			</h4>

			<div class="mt-8">
				<div class="flex flex-col gap-3">
					{#each whyJoinUsSection as { text, symbol }}
						<p class="flex items-center gap-3">
							<span>{[symbol]}</span>
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
					<enhanced:img class="w-[900px] rounded-md" src={recoupe_participant_still} alt="" />

					<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
					</div>

					<div class="absolute top-2 right-2">
						<p class="text-[17px] font-medium text-white">Participant Testimonial</p>
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
</style>

<script lang="ts" context="module">
	import { ArrowCircleRight, ArrowRight, Clover } from 'phosphor-svelte';

	import image from '^assets/image';

	import { bannerVideoMp4 } from '^assets/videos';
	import { Header, OurMissionModal, PartnersAndSupportersCarousel } from '^components/~sections';
	import { updateSiteState } from '^lib/state';

	// programmes (for individuals to sign up to); 1:1 mentoring; tailored programs for groups; youth advisory board
	// for young people: group based nature programmes; 1:1 mentoring; youth advisory board; non-official volunteering (as mentor or something like that)?
	// for institution: tailored programs.

	// - linkedin icon in header
	// - wants colour changes on buttons
	// - having videos made for each programme -> land on it
	// - clear cta to sign up
	// - who, what, where, why, when

	// PROGRAMME PAGE.
	// - want google map. if it's big then don't worry.
	// - testimonials
	// - no booking system. just sign up and Birch will send the info.
	//    - sign up -> we'll send an email -> come to first session and see if it's for you.
	//    - some will be reassured by just being accepted and no vetting, etc.
	// - don't want feedback section on each programme page
	// - on form - legal text maybe make clear is legal, and so don't have to read.

	// TODO
	// - body font. Browser font seems good.

	// LANDING PAGE
	// - partners & supporters
	// - images/videos.
	// - other: donate, newsletter,
	// - our impact - what they want??
</script>

<Header />

<OurMissionModal
	onClickCloseShowreel={() => {
		updateSiteState.showreel.setIsOpen(false);
	}}
/>

<div class="max-w-screen overflow-hidden pb-40">
	<section class="flex max-h-screen flex-col">
		<div class="relative grow">
			<video class="h-full w-full object-cover" loop muted>
				<source src={bannerVideoMp4} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div
				class="from-bc-slate-pine absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent"
			></div>

			<div class="absolute bottom-[100px] left-[150px] z-20 w-full">
				<h2 class="font-display flex flex-col text-7xl font-semibold tracking-wide text-white">
					Connect Through Nature
				</h2>

				<p class="mt-16 text-xl font-medium text-white">Start today in Bristol!</p>
				<p class="mt-4 max-w-[690px] text-xl leading-[1.5em] font-medium text-white">
					Join in through one of our programmes! They are both free and paid, and range from one-day
					drop-ins to longer adventures.
				</p>

				<div class="mt-10 flex items-center gap-12">
					<button
						class="bg-my-pale-yellow relative flex items-center gap-4 rounded-3xl px-5 py-3 tracking-wide"
						type="button"
					>
						<span class="text-lg font-medium">Get Involved Today</span>
						<span class="text-2xl"><ArrowRight /></span>
					</button>
				</div>

				<!-- <div class="mt-10 flex items-center gap-12">
					<a
						class="font-display relative flex items-center gap-4 text-4xl font-bold tracking-wide text-white"
						href="/"
					>
						<span>Programmes</span>
						<span>
							<enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_amber}
								alt=""
							/>
						</span>
					</a>

					<button
						class="font-display relative flex items-center gap-2 text-4xl font-bold tracking-wide text-white"
						type="button"
					>
						<span class="text-white">Our Mission</span>
						<enhanced:img class="w-[20px]" src={image.illustration.play_icon_white} alt="" />

						<span
							><enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_amber}
								alt=""
							/></span
						>
					</button>
				</div> -->
			</div>
		</div>
	</section>

	<section class="relative mt-32 flex justify-center px-40">
		<div
			class="bg-my-pale-yellow absolute -top-1/2 -right-1/2 -z-10 aspect-square w-[80%] -translate-y-1/2 rounded-full"
		></div>

		<div class="flex w-full justify-between">
			<div class="w-[600px]">
				<h2 class="font-display text-my-light-orangey-brown text-6xl font-bold">
					Welcome to <span class="">The Birch Collective</span>
				</h2>
				<div class="mt-8">
					<span class="text-lg">
						The Birch Collective believes in the power of nature, community, and connection. We’re a
						social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding
						areas who might be feeling isolated, overwhelmed, or unsure of their place in the world.
						Whether you’re dealing with anxiety, depression, or just looking for a space to belong,
						we’re here to walk alongside you.
					</span>
				</div>

				<!-- <p class="mt-12 inline-flex items-center gap-2 rounded-md text-black/30">
					<span>Read more about us</span>
					<span><ArrowRight /></span>
				</p> -->
			</div>

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative cursor-pointer"
				on:click={() => {
					updateSiteState.showreel.setIsOpen(true);
				}}
			>
				<enhanced:img
					class="w-[700px] rounded-md"
					src={image.placeholder.mission_vid_placeholder}
					alt=""
				/>

				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<enhanced:img class="w-[50px]" src={image.illustration.play_icon_white} alt="" />
				</div>

				<div class="absolute top-2 right-2">
					<p class="text-[17px] font-medium text-white">The Birch Collective — Our Mission</p>
				</div>
			</div>
		</div>
	</section>

	<section class="relative mt-36 flex justify-center px-40">
		<div class=" max-w-[680px]">
			<h2 class="font-display text-bc-slate-pine text-[52px] leading-[1.25em] font-bold">
				Cultivating Purpose, Belonging & Resilience
			</h2>

			<div class="mt-4 flex flex-col gap-3">
				<div class="mt-2 flex items-center gap-4">
					<span class="text-bc-pale-sandstone text-3xl"><Clover /></span>
					<p class="text-xl leading-relaxed">
						We work alongside young adults to empower and support your transition into adulthood
					</p>
				</div>

				<div class="mt-2 flex items-center gap-4">
					<span class="text-bc-pale-sandstone text-3xl"><Clover /></span>
					<p class="text-xl leading-relaxed">
						We want you to unlock your potential to engage fully with life, and to respond
						resiliently to life's challenges
					</p>
				</div>

				<div class="mt-2 flex items-center gap-4">
					<span class="text-bc-pale-sandstone text-3xl"><Clover /></span>
					<p class="text-xl leading-relaxed">
						We believe that developing connections with the natural world gives you a sense of
						belonging
					</p>
				</div>

				<div class="mt-2 flex items-center gap-4">
					<span class="text-bc-pale-sandstone text-3xl"><Clover /></span>
					<p class="text-xl leading-relaxed">
						We offer you the chance to be part of an inclusive community where you can explore
					</p>
				</div>
			</div>

			<div class="mt-12 flex justify-center">
				<button
					class="bg-bc-pale-sandstone flex items-center gap-2 rounded-full px-5 py-[6px] text-lg text-black/65"
					type="button"
				>
					<span>Our Theory of Change</span>
					<span><ArrowRight /></span>
				</button>
			</div>
		</div>
	</section>

	<section class="relative mt-36 flex justify-center px-40">
		<div>
			<h2 class="font-display text-3xl font-bold tracking-wide text-black/70">What We Offer</h2>

			<div class=" mt-6 flex w-full justify-between gap-40">
				<div class="w-[700px]">
					<enhanced:img
						class="aspect-video rounded-sm object-cover"
						src={image.placeholder.banner_4}
						alt=""
					/>

					<h3 class="font-display text-bc-slate-pine mt-3 text-[42px] font-bold">
						Free Programmes
					</h3>

					<p class="mt-1 text-lg leading-relaxed">
						If you're 16-25 and interested in nature based activities for wellbeing, click here.
						They're free!
					</p>
				</div>

				<div class="w-[700px]">
					<enhanced:img
						class="aspect-video rounded-sm object-cover"
						src={image.placeholder.banner_15}
						alt=""
					/>

					<h3 class="font-display text-bc-slate-pine mt-3 text-[42px] font-bold">Partnerships</h3>

					<p class="mt-1 text-lg leading-relaxed">
						If you're 16-25 and interested in nature based activities for wellbeing, click here.
						They're free!
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- <section class="mt-28 flex justify-center">
		<enhanced:img
			class="h-[3px] w-[250px] object-cover"
			src={image.illustration.drawn_line_black}
			alt=""
		/>
	</section> -->
</div>

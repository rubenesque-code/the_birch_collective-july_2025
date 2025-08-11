<script lang="ts" context="module">
	import { ArrowRight } from 'phosphor-svelte';

	import image from '^assets/image';

	import { bannerVideoMp4, bannerVideoWebm } from '^assets/videos';

	// need distinction between paid and free.
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
</script>

<div class="max-w-screen overflow-hidden pb-40">
	<section class="flex max-h-screen flex-col">
		<div class="relative grow">
			<video class="h-full w-full object-cover" loop muted>
				<source src={bannerVideoMp4} type="video/mp4" />
				<source src={bannerVideoWebm} type="video/webm" />
				Your browser does not support the video tag.
			</video>

			<div class="absolute top-0 left-0 z-10 w-full p-4">
				<h1 class="font-display flex flex-col text-4xl font-bold">
					<span class="translate-x-[40px]">The</span>
					<span class="translate-x-[60px] translate-y-[-10px] text-[66px]">Birch</span>
					<span class="translate-x-[20px] translate-y-[-20px]">Collective</span>
				</h1>
			</div>
			<div
				class="from-bc-slate-pine absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent"
			></div>

			<div class="absolute bottom-[100px] left-[150px] z-20 w-full">
				<h2 class="font-display flex flex-col text-6xl font-semibold tracking-wide text-white">
					Connect Through Nature
				</h2>

				<p class="mt-10 text-xl text-white">Start today in Bristol!</p>
				<p class="mt-2 max-w-[690px] text-xl leading-[1.5em] text-white">
					Join in through one of our programmes! They are both free and paid, and range from one-day
					drop-ins to longer adventures.
				</p>

				<div class="mt-10 flex items-center gap-12">
					<!-- <a
						class="bg-my-light-orangey-brown inline-flex items-center gap-4 rounded-full px-6 py-[12px] text-xl tracking-wide text-white uppercase"
						href="/"
					>
						<span>Programmes</span>
						<span
							class="text-bc-amber grid aspect-square h-[34px] w-[34px] place-items-center rounded-full border border-white bg-white text-2xl"
							><ArrowRight weight="bold" /></span
						>
					</a> -->
					<a
						class="font-display relative flex items-center gap-4 text-4xl font-bold tracking-wide text-white"
						href="/"
					>
						<span>Programmes</span>
						<!-- <span class="text-xl"><ArrowRight weight="bold" /></span> -->
						<span>
							<enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_black}
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
						<!-- <span class="text-xl"><Play weight="fill" /></span> -->

						<span
							><enhanced:img
								class="absolute bottom-[-7px] left-0 h-[3px] w-full -translate-x-[8px] object-cover"
								src={image.illustration.drawn_line_black}
								alt=""
							/></span
						>
					</button>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-32 flex justify-center px-40">
		<div class="flex w-full justify-between">
			<div class="mt-8 w-[600px]">
				<h2 class="font-display text-6xl font-bold">
					Welcome to <span class="">The Birch Collective</span>
				</h2>
				<div class="mt-8">
					<!-- <span class="font-display float-left mr-4 mb-2 text-7xl font-bold">T</span> --><span
						class="text-lg"
					>
						The Birch Collective believes in the power of nature, community, and connection. We’re a
						social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding
						areas who might be feeling isolated, overwhelmed, or unsure of their place in the world.
						Whether you’re dealing with anxiety, depression, or just looking for a space to belong,
						we’re here to walk alongside you.
					</span>
				</div>
			</div>
			<div class="relative">
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

	<!-- <section>
		<div class="mt-20 flex justify-center">
			<div>
				<div class="w-[600px]">
					<span class="font-display float-left mr-4 mb-2 text-7xl font-bold">T</span><span
						class="text-lg"
					>
						he Birch Collective believes in the power of nature, community, and connection. We’re a
						social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding
						areas who might be feeling isolated, overwhelmed, or unsure of their place in the world.
						Whether you’re dealing with anxiety, depression, or just looking for a space to belong,
						we’re here to walk alongside you.
					</span>
				</div>
				<div class="mt-8 flex justify-center">
					<button class="relative flex items-center gap-4" type="button"
						><span class="">
							<span class="font-display text-3xl font-bold text-black/60">about us</span></span
						>
						<span>
							<enhanced:img class="w-[20px]" src={image.illustration.play_icon_yellow} alt="" />
						</span>
					</button>
				</div>
			</div>
		</div>
	</section> -->
</div>

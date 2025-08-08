<script lang="ts" context="module">
	import { ArrowRight, Play, PlayCircle, Quotes } from 'phosphor-svelte';

	import image from '^assets/image';

	import { Header } from '^components/~sections';
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

<!-- <Header /> -->

<section class="flex max-h-screen flex-col">
	<div class="relative grow">
		<video class="h-full w-full object-cover" loop muted>
			<source src={bannerVideoMp4} type="video/mp4" />
			<source src={bannerVideoWebm} type="video/webm" />
			Your browser does not support the video tag.
		</video>

		<div class="absolute top-0 left-0 z-10 w-full p-4">
			<h1 class="font-display flex flex-col text-6xl font-bold text-white">
				<span class="translate-x-[40px]">The</span>
				<span class="translate-x-[60px] translate-y-[-10px] text-[66px]">Birch</span>
				<span class="translate-x-[20px] translate-y-[-20px]">Collective</span>
			</h1>
		</div>
		<div
			class="from-bc-slate-pine absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t to-transparent"
		></div>

		<div class="absolute bottom-[100px] left-[150px] z-20 w-full">
			<h2 class="font-oswald flex flex-col text-6xl font-semibold text-white">
				Connect Through Nature
			</h2>

			<p class="mt-10 text-2xl text-white">Start today in Bristol!</p>
			<p class="mt-2 max-w-[690px] text-2xl leading-[1.5em] text-white">
				Join in through one of our programmes! They are both free and paid, and range from one-day
				drop-ins longer adventures.
			</p>

			<div class="mt-8 flex items-center gap-12">
				<a
					class="bg-bc-amber inline-flex items-center gap-4 rounded-full px-6 py-[12px] text-xl tracking-wide text-white uppercase"
					href="/"
				>
					<span>Programmes</span>
					<span
						class="text-bc-amber grid aspect-square h-[34px] w-[34px] place-items-center rounded-full border border-white bg-white text-2xl"
						><ArrowRight weight="bold" /></span
					>
				</a>

				<button
					class="border-bc-black flex items-center gap-2 rounded-full px-6 py-[8px] text-xl tracking-wide uppercase"
					type="button"
				>
					<span class="text-white">Our Mission</span>
					<span
						class="grid aspect-square h-[40px] w-[40px] place-items-center rounded-full p-[6px] text-2xl text-white"
						><Play weight="fill" /></span
					>
				</button>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 px-40">
	<div class="flex justify-center">
		<div class="flex max-w-[760px] flex-col items-center">
			<p class="mt-4 text-2xl leading-[1.5em]">
				At The Birch Collective, we believe in the power of nature, community, and connection. We’re
				a social enterprise dedicated to helping people aged 16-25 in Bristol and the surrounding
				areas who might be feeling isolated, overwhelmed, or unsure of their place in the world.
				Whether you’re dealing with anxiety, depression, or just looking for a space to belong,
				we’re here to walk alongside you.
			</p>

			<button
				class="border-bc-slate-pine/60 mt-12 flex items-center gap-2 border-b-2 pb-1 text-xl tracking-wide uppercase"
				type="button"
			>
				<span class="text-bc-amber">Watch a video About Us</span>
				<span
					class="text-bc-slate-pine grid aspect-square h-[40px] w-[40px] place-items-center rounded-full p-[6px] text-2xl"
					><Play weight="duotone" /></span
				>
			</button>
		</div>
	</div>
</section>

<section class="mt-24 px-40 pb-40">
	<div class="">
		<h2 class="font-display text-bc-slate-pine py-2 text-5xl font-bold">What We Do</h2>

		<div class="grid grid-cols-3 gap-x-12">
			<div></div>
		</div>
	</div>
</section>
